import React from "react";
import { Helmet } from "react-helmet-async";
import "typeface-ibm-plex-serif";
import "typeface-open-sans";
import "paper-css/paper.css";
import styled, { createGlobalStyle } from "styled-components";
import MdiIcon from "@mdi/react";
import {
  mdiEarth,
  mdiGithub,
  mdiEmail,
  mdiTwitter,
  mdiStackOverflow,
  mdiPhone,
  mdiStar,
  mdiCalendarBlank,
  mdiCalendarClock,
  mdiMapMarker,
} from "@mdi/js";
import LogoPaige from "../resources/logo_paige.svg";
import LogoEpita from "../resources/logo_epita.svg";
import LogoFacebook from "../resources/logo_facebook.svg";
import LogoZenreach from "../resources/logo_zenreach.svg";
import LogoAlgolia from "../resources/logo_algolia.svg";

const fontFamily = {
  serif: `'IBM Plex Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif`,
};

const opacity = {
  faded: `0.6`,
  fadedAccent: `0.8`,
};

const margin = {
  vertical: "0.8cm",
  horizontal: "1.2cm",
};

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    line-height: 1.3;
    box-sizing: inherit;
    -webkit-print-color-adjust: exact;
  }

  @page {
    size: A4;
    margin: 0;
  }

  body {
    min-width: initial !important;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    margin: 0px;
    padding: 0px;
  }

  html {
    font-family: ${fontFamily.sansSerif};
    font-size: 14px;
  }

  a {
    color: #2196f3;
    text-decoration: none;
    transition: all 0.15s;
  }

  a:hover {
    color: #2196f3;
    text-decoration: underline;
  }

  a:visited {
    color: #2196f3;
  }

  a:active {
    color: #2196f3;
  }

  em, strong {
    font-weight: inherit;
    font-style: inherit;
  }
`;

const SheetContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${margin.vertical} 0;
`;

const VContainer = styled.section`
  padding: 0 ${margin.horizontal};
`;

const Title = styled.h1`
  font-family: ${fontFamily.serif};
  font-size: 2rem;
`;

const VSep = styled.div`
  flex-grow: ${(props) => (props.fill ? "1" : "0")};
  height: ${(props) => `${(props.s * 0.2).toFixed(6)}em`};
`;

const HSep = styled.span`
  display: inline-flex;
  width: ${(props) => `${(props.s * 0.2).toFixed(6)}em`};
`;

const Subtitle = styled.h2`
  font-family: ${fontFamily.serif};
  font-size: 1.2rem;
  font-weight: 300;
  color: hsla(0, 0%, 0%, ${opacity.faded});
`;

const SubtitleAccent = styled.em`
  font-weight: 400;
  color: hsla(0, 0%, 0%, ${opacity.fadedAccent});
`;

const Info = styled.div`
  display: grid;
  row-gap: 0.1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const IconContainer = styled.span`
  margin-right: ${(props) => (props.size * 0.4).toFixed(6)}em;
  display: inline-flex;
  align-self: center;
  position: relative;
  font-size: 1.2em;
`;

const MdiIconStyled = styled(MdiIcon)`
  height: 1em;
  width: 1em;
  top: 0.2em;
  position: relative;
  fill: currentColor;
`;

function Icon({ ...props }) {
  return (
    <IconContainer>
      <MdiIconStyled {...props} />
    </IconContainer>
  );
}

const Sections = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// -1px shadow size to fix an issue with the shadow overflowing from its container
// in print preview mode.
const Section = styled.section`
  /* margin-left: 0.5cm;
  padding: 0.2cm ${margin.horizontal} 0.2cm calc(${margin.horizontal} - 0.5cm);
  box-shadow: inset 0.18cm 0px 0px -0.02cm ${(props) => props.color}; */
  padding: 0.2cm ${margin.horizontal};
  box-shadow: inset 0.18cm 0px 0px -0.02cm ${(props) => props.color};
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
`;

const SectionTitle = styled.h3`
  flex-grow: 1;
  font-family: ${fontFamily.serif};
  font-size: 1.4rem;
`;

const SectionTitleRight = styled.div``;

const SectionContent = styled.div``;

const SectionItemContainer = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionItemLeft = styled.div`
  flex-shrink: 0;
  margin-right: 0.8rem;
  width: 64px;
`;

const SectionItemRight = styled.div`
  flex-grow: 1;
`;

function SectionItem({ icon, children }) {
  return (
    <SectionItemContainer>
      {icon && <SectionItemLeft>{icon}</SectionItemLeft>}
      <SectionItemRight>{children}</SectionItemRight>
    </SectionItemContainer>
  );
}

const SectionItemTitleContainer = styled.h4`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.2rem;
`;

const SectionItemTitleLeft = styled.div`
  flex-grow: 1;
  font-weight: 600;
`;

const SectionItemTitleRight = styled.div`
  flex-shrink: 0;
  color: hsla(0, 0%, 0%, ${opacity.faded});
  font-size: 0.9em;
`;

const SectionItemTitleBottom = styled.div`
  flex-basis: 100%;
  color: hsla(0, 0%, 0%, ${opacity.faded});
  font-size: 0.9em;
`;

function SectionItemTitle({ info, bottomInfo, children }) {
  return (
    <SectionItemTitleContainer>
      <SectionItemTitleLeft>{children}</SectionItemTitleLeft>

      {info && <SectionItemTitleRight>{info}</SectionItemTitleRight>}

      {bottomInfo && (
        <SectionItemTitleBottom>{bottomInfo}</SectionItemTitleBottom>
      )}
    </SectionItemTitleContainer>
  );
}

const SectionItemTitleLink = styled.a``;

const SectionItemTitleSecondary = styled.span`
  color: hsla(0, 0%, 0%, ${opacity.faded});
  font-weight: 400;
`;

const SectionItemGithubStars = styled.span`
  color: hsla(0, 0%, 0%, ${opacity.faded});
  font-weight: 400;
  margin-left: 0.6rem;
`;

const SectionItemSubtitle = styled.h4`
  font-size: 0.9rem;
`;

const Accent = styled.em`
  color: hsla(0, 0%, 0%, ${opacity.fadedAccent});
  font-weight: 600;
`;

const Strong = styled.strong`
  color: hsla(0, 0%, 0%, ${opacity.fadedAccent});
  font-weight: 600;
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.5em;
`;

const Pill = styled.a`
  font-size: ${(props) => (props.small ? "0.8em" : "1em")};
  display: inline-flex;
  padding: 0.2em 0.4em;
  box-shadow: 0px 0px 0px 1px
    ${(props) =>
      props.preferred ? "#e1bee7" : props.interest ? "#c8e6c9" : "#bbdefb"};
  color: ${(props) =>
    props.preferred ? "#9c27b0" : props.interest ? "#43a047" : "#1e88e5"};
  border-radius: 0.2em;
  margin-right: 0.5em;
  font-weight: ${(props) => (props.preferred ? "600" : "400")};

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: ${(props) =>
      props.preferred ? "#9c27b0" : props.interest ? "#43a047" : "#1e88e5"};
  }
`;

const Footer = styled.div`
  color: hsla(0, 0%, 0%, ${opacity.faded});
  text-align: center;
  font-size: 0.8rem;
`;

function createLogo(Logo) {
  return styled(Logo)`
    max-width: 64px;
    max-height: 48px;
    vertical-align: top;
  `;
}

const LogoPaigeStyled = createLogo(LogoPaige);

const LogoEpitaStyled = createLogo(LogoEpita);

const LogoFacebookStyled = createLogo(LogoFacebook);

const LogoZenreachStyled = createLogo(LogoZenreach);

const LogoAlgoliaStyled = createLogo(LogoAlgolia);

export default () => {
  return (
    <>
      <GlobalStyle />

      <Helmet
        bodyAttributes={{ class: "A4" }}
        title="Alexandre Kirszenberg's Resume"
      />

      <SheetContainer className="sheet">
        <Container>
          <VContainer>
            <Title>Alexandre Kirszenberg</Title>

            <VSep s={1} />

            <Subtitle>
              Software Engineer interested in{" "}
              <SubtitleAccent>Visualization</SubtitleAccent> and{" "}
              <SubtitleAccent>Artificial Intelligence</SubtitleAccent>
            </Subtitle>

            <VSep s={4} />

            <Info>
              <a href="mailto:alex@kirszenberg.com">
                <Icon path={mdiEmail} />
                <HSep s={2} />
                alex@kirszenberg.com
              </a>

              <a href="tel:+33631954205">
                <Icon path={mdiPhone} />
                <HSep s={2} />
                +33 6 31 95 42 05
              </a>

              <a href="https://kirszenberg.com">
                <Icon path={mdiEarth} />
                <HSep s={2} />
                kirszenberg.com
              </a>

              <a href="https://github.com/alexkirsz">
                <Icon path={mdiGithub} />
                <HSep s={2} />
                alexkirsz
              </a>

              <a href="https://stackoverflow.com/users/969302/alexandre-kirszenberg">
                <Icon path={mdiStackOverflow} />
                <HSep s={2} />
                Alexandre Kirszenberg
              </a>

              <a href="https://twitter.com/alexkirsz">
                <Icon path={mdiTwitter} />
                <HSep s={2} />
                @alexkirsz
              </a>
            </Info>
          </VContainer>

          <VSep s={4} />

          <Sections>
            <Section color="#c5e1a5">
              <SectionTitleContainer>
                <SectionTitle>Professional experience</SectionTitle>
              </SectionTitleContainer>

              <SectionContent>
                <SectionItem icon={<LogoPaigeStyled />}>
                  <SectionItemTitle
                    info={
                      <>
                        <Icon path={mdiMapMarker} /> New York City, Paris
                        <HSep s={3} />
                        <Icon path={mdiCalendarClock} /> Mar. 2020 (1 yr. 7 mos.)
                      </>
                    }
                  >
                    Software Engineer, Visualization{" "}
                    <SectionItemTitleSecondary>
                      at <a href="https://paige.ai">Paige</a>
                    </SectionItemTitleSecondary>
                  </SectionItemTitle>

                  <SectionItemSubtitle>
                    Researched and implemented new visualization techniques for
                    gigapixel-large medical images in the browser, using{" "}
                    <Strong>Rust</Strong>, <Strong>WebAssembly</Strong> and{" "}
                    <Strong>WebGL</Strong>, achieving up to 4x faster user
                    experience. Implemented image container decoding libraries
                    and bindings in <Strong>Rust</Strong>, using the{" "}
                    <a href="https://pyo3.rs/">PyO3</a>,{" "}
                    <a href="https://rust-lang.github.io/rust-bindgen/">
                      bindgen
                    </a>
                    , and <a href="https://cxx.rs/">cxx</a> libraries.
                    Architectured a modern web app in <Strong>React</Strong>{" "}
                    with a focus on runtime performance and memory consumption.
                  </SectionItemSubtitle>
                </SectionItem>

                <SectionItem icon={<LogoFacebookStyled />}>
                  <SectionItemTitle
                    info={
                      <>
                        <Icon path={mdiMapMarker} /> London
                        <HSep s={3} />
                        <Icon path={mdiCalendarBlank} /> Sep. 2018 (4 mos.)
                      </>
                    }
                  >
                    Software Engineer Intern{" "}
                    <SectionItemTitleSecondary>
                      at <a href="https://facebook.com">Facebook</a>
                    </SectionItemTitleSecondary>
                  </SectionItemTitle>

                  <SectionItemSubtitle>
                    Optimized the startup time of web applications built with
                    the{" "}
                    <a href="https://facebook.github.io/metro/">
                      Metro compiler
                    </a>{" "}
                    with a state-of-the-art update delivery pipeline, achieving
                    up to 5x speed-up when applying updates on slow connections.
                    Improved the reliability of Hot Module Reloading for{" "}
                    <Strong>React Native</Strong>.
                  </SectionItemSubtitle>
                </SectionItem>

                <SectionItem icon={<LogoEpitaStyled />}>
                  <SectionItemTitle
                    info={
                      <>
                        <Icon path={mdiMapMarker} /> Paris
                        <HSep s={3} />
                        <Icon path={mdiCalendarClock} /> Sep. 2017 (3 yrs.)
                      </>
                    }
                  >
                    Teaching Assistant{" "}
                    <SectionItemTitleSecondary>
                      at <a href="https://epita.fr">EPITA</a>
                    </SectionItemTitleSecondary>
                  </SectionItemTitle>

                  <SectionItemSubtitle>
                    Teaching <Strong>C</Strong>, <Strong>C++</Strong>,{" "}
                    <Strong>Java</Strong>, <Strong>SQL</Strong>, and project
                    management skills to third year students.
                  </SectionItemSubtitle>
                </SectionItem>

                <SectionItem icon={<LogoZenreachStyled />}>
                  <SectionItemTitle
                    info={
                      <>
                        <Icon path={mdiMapMarker} /> San Francisco
                        <HSep s={3} />
                        <Icon path={mdiCalendarBlank} /> May 2017 (4 mos.)
                      </>
                    }
                  >
                    Software Engineer Intern{" "}
                    <SectionItemTitleSecondary>
                      at <a href="https://zenreach.com">Zenreach</a>
                    </SectionItemTitleSecondary>
                  </SectionItemTitle>

                  <SectionItemSubtitle>
                    Built new features into the core product's web application.
                    Trained a team of frontend engineers on{" "}
                    <a href="https://reactjs.org/">React</a> best practices and
                    state management solutions.
                  </SectionItemSubtitle>
                </SectionItem>

                <SectionItem icon={<LogoAlgoliaStyled />}>
                  <SectionItemTitle
                    info={
                      <>
                        <Icon path={mdiMapMarker} /> Paris
                        <HSep s={3} />
                        <Icon path={mdiCalendarBlank} /> Jul. 2016 (2 mos.)
                      </>
                    }
                  >
                    Software Engineer Intern{" "}
                    <SectionItemTitleSecondary>
                      at <a href="https://algolia.com">Algolia</a>
                    </SectionItemTitleSecondary>
                  </SectionItemTitle>

                  <SectionItemSubtitle>
                    Built the core of{" "}
                    <a href="https://github.com/algolia/react-instantsearch">
                      React InstantSearch
                    </a>
                    , a library for building performant search experiences using
                    Algolia.
                  </SectionItemSubtitle>
                </SectionItem>
              </SectionContent>
            </Section>

            <Section color="#b3e5fc">
              <SectionTitleContainer>
                <SectionTitle>Education</SectionTitle>
              </SectionTitleContainer>

              <SectionContent>
                <SectionItem>
                  <SectionItemTitle
                    bottomInfo={
                      <>
                        <Icon path={mdiMapMarker} /> Paris
                        <HSep s={3} />
                        <Icon path={mdiCalendarClock} /> January 2018 (2½ yrs.)
                      </>
                    }
                  >
                    <a href="https://www.lrde.epita.fr/wiki/Home">
                      LRDE – Laboratoire de Recherche et Développement d'EPITA
                    </a>{" "}
                    <SectionItemTitleSecondary>
                      (Research Laboratory)
                    </SectionItemTitleSecondary>
                  </SectionItemTitle>

                  <SectionItemSubtitle>
                    Worked on leveraging the theory of{" "}
                    <Accent>Mathematical Morphology</Accent> within{" "}
                    <Accent>Deep Neural Networks</Accent> (
                    <a href="https://arxiv.org/pdf/2102.10038.pdf">paper</a>).
                    Also built a <Accent>Model Checking</Accent> pipeline for
                    the <Accent>Go</Accent> programming language (
                    <a href="https://www.lrde.epita.fr/dload/papers/kirszenberg.21.spin.pdf">
                      paper
                    </a>
                    ).
                  </SectionItemSubtitle>
                </SectionItem>

                <SectionItem>
                  <SectionItemTitle
                    bottomInfo={
                      <>
                        <Icon path={mdiMapMarker} /> Paris
                        <HSep s={3} />
                        <Icon path={mdiCalendarClock} /> Graduated November 2020
                      </>
                    }
                  >
                    <a href="https://www.epita.fr/en">
                      EPITA – École Pour l'Informatique et les Techniques
                      Avancées
                    </a>{" "}
                    <SectionItemTitleSecondary>
                      (Engineering School)
                    </SectionItemTitleSecondary>
                  </SectionItemTitle>

                  <SectionItemSubtitle>
                    Master in Computer Science with a specialization in{" "}
                    <Accent>Image Processing</Accent> and{" "}
                    <Accent>Artificial Intelligence</Accent>.
                  </SectionItemSubtitle>
                </SectionItem>
              </SectionContent>
            </Section>

            <Section color="#ffe082">
              <SectionTitleContainer>
                <SectionTitle>Personal projects</SectionTitle>
              </SectionTitleContainer>
              <SectionContent>
                <SectionItem>
                  <SectionItemTitle>
                    <SectionItemTitleLink href="https://github.com/alexkirsz/dispatch-proxy">
                      <Icon path={mdiGithub} />
                      <HSep s={2} />
                      dispatch-proxy
                    </SectionItemTitleLink>
                    <SectionItemGithubStars>
                      <Icon path={mdiStar} />
                      <HSep s={1} />
                      3.3k
                    </SectionItemGithubStars>
                  </SectionItemTitle>

                  <SectionItemSubtitle>
                    A proxy that dispatches connections to different network
                    interfaces, effectively balancing load across different
                    internet access points.
                  </SectionItemSubtitle>
                </SectionItem>

                <SectionItem>
                  <SectionItemTitle>
                    <SectionItemTitleLink href="https://github.com/Morhaus/facebook-sixth-sense">
                      <Icon path={mdiGithub} />
                      <HSep s={2} />
                      Facebook Sixth Sense
                    </SectionItemTitleLink>
                    <SectionItemGithubStars>
                      <Icon path={mdiStar} />
                      <HSep s={1} />
                      474
                    </SectionItemGithubStars>
                  </SectionItemTitle>

                  <SectionItemSubtitle>
                    A Chrome extension that lets you know whenever your friends
                    start writing to you on Facebook.
                    <br />
                    <a href="https://kirszenberg.com/facebook-sixth-sense">
                      Read the introductory blog post.
                    </a>
                  </SectionItemSubtitle>
                </SectionItem>
              </SectionContent>
            </Section>

            <Section color="#ffab91">
              <SectionTitleContainer>
                <SectionTitle>Interests and Miscellaneous Skills</SectionTitle>
                <SectionTitleRight>
                  <Pill preferred small>
                    Preferred
                  </Pill>
                  <Pill small>Working knowledge</Pill>
                  <Pill interest small>
                    Interested in learning
                  </Pill>
                </SectionTitleRight>
              </SectionTitleContainer>

              <SectionContent>
                <SectionItem>
                  <SectionItemTitle>
                    Programming Languages and Paradigms
                  </SectionItemTitle>

                  <SectionItemSubtitle>
                    <Pills>
                      <Pill preferred href="https://www.rust-lang.org/">
                        Rust
                      </Pill>
                      <Pill preferred href="https://www.typescriptlang.org/">
                        TypeScript
                      </Pill>
                      <Pill href="https://www.python.org/">Python</Pill>
                      <Pill href="https://en.wikipedia.org/wiki/C%2B%2B">
                        C++
                      </Pill>
                      <Pill href="https://en.wikipedia.org/wiki/C_(programming_language)">
                        C
                      </Pill>
                      <Pill href="https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language">
                        GLSL
                      </Pill>
                      <Pill interest href="https://www.haskell.org/">
                        Haskell
                      </Pill>
                      <Pill interest href="https://kotlinlang.org/">
                        Kotlin
                      </Pill>
                      <Pill interest href="https://ocaml.org/">
                        OCaml
                      </Pill>
                      <Pill
                        interest
                        href="https://developer.nvidia.com/cuda-toolkit"
                      >
                        CUDA
                      </Pill>
                    </Pills>
                  </SectionItemSubtitle>
                </SectionItem>

                <SectionItem>
                  <SectionItemTitle>
                    Machine Learning and Image Processing
                  </SectionItemTitle>

                  <SectionItemSubtitle>
                    <Pills>
                      <Pill href="https://keras.io/">Keras</Pill>
                      <Pill href="https://pytorch.org/">PyTorch</Pill>
                      <Pill href="https://www.tensorflow.org/">TensorFlow</Pill>
                      <Pill href="https://numpy.org/">NumPy</Pill>
                      <Pill href="https://www.scipy.org/">SciPy</Pill>
                      <Pill href="https://scikit-image.org/">Scikit Image</Pill>
                      <Pill href="https://scikit-learn.org/">Scikit Learn</Pill>
                      <Pill href="https://opencv.org/">OpenCV</Pill>
                    </Pills>
                  </SectionItemSubtitle>
                </SectionItem>
              </SectionContent>
            </Section>
          </Sections>

          <VSep s={4} />

          <Footer>
            An interactive and up-to-date version of this document is available
            at <a href="https://kirszenberg.com/cv">kirszenberg.com/cv</a>
          </Footer>
        </Container>
      </SheetContainer>
    </>
  );
};
