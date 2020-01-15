import React, { useEffect, useRef, useState } from "react";
import factory from "./boids.js";
import boidsWasmUrl from "./boids.wasm";
import Play from "@material-ui/icons/PlayArrow";
import styled from "styled-components";

const wasmPromise = (async () => {
  const res = await fetch(boidsWasmUrl);
  const bytecode = await res.arrayBuffer();
  return await WebAssembly.compile(bytecode);
})();

const PlayContainer = styled.div`
  transition: opacity 0.3s ease;
  overflow: hidden;
  color: white;
  font-size: 128px;
  background-color: black;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0.4;

  &:hover {
    opacity: 0.6;
  }
`;

let stopCurrentSimulation = () => {};

export default function Simulation({ type, width, height }) {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(false);

  async function instantiate() {
    let canvas = canvasRef.current;
    if (canvas == null) {
      return;
    }
    const wasm = await wasmPromise;

    const instance = factory();
    const compiled = await WebAssembly.instantiate(wasm, instance.imports);
    // This will initialize the module and call your `main`, if you have one.
    const mod = instance.initialize(compiled);

    const oldCanvas = document.getElementById("canvas");
    if (oldCanvas != null) {
      oldCanvas.id = "__old_canvas";
    }
    const oldId = canvas.id;
    canvas.id = "canvas";
    mod.start(type);
    canvas.id = oldId;
    if (oldCanvas != null) {
      oldCanvas.id = "canvas";
    }
    stopCurrentSimulation();
    stopCurrentSimulation = () => {
      mod.stop();
      setRunning(false);
    };
  }

  useEffect(() => {
    if (running) {
      instantiate();
    }
  }, [running]);

  useEffect(() => {
    let canvas = canvasRef.current;
    if (canvas == null) {
      return;
    }
    function eventHandler(e) {
      e.preventDefault();
    }
    canvas.addEventListener("wheel", eventHandler, {
      passive: false
    });
    return () => {
      canvas.removeEventListener("wheel", eventHandler);
    };
  }, [canvasRef]);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <PlayContainer
        onClick={() => setRunning(true)}
        style={{
          width,
          height,
          ...(running
            ? { opacity: 0.0, pointerEvents: "none" }
            : { cursor: "pointer" })
        }}
      >
        <Play fontSize="inherit" />
      </PlayContainer>
      <canvas
        style={{
          overflow: "hidden",
          width,
          height,
          backgroundColor: "black"
        }}
        ref={canvasRef}
        onContextMenu={e => e.preventDefault()}
      />
    </div>
  );
}
