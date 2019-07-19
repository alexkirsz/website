import React from "react";
import { Helmet } from "react-helmet-async";
import "typeface-ibm-plex-serif";
import "typeface-open-sans";
import "paper-css/paper.css";
import styled, { createGlobalStyle } from "styled-components";
import MdiIcon from "@mdi/react";
import {
  mdiEarth,
  mdiGithubFace,
  mdiAt,
  mdiEmailOutline,
  mdiEmail,
  mdiTwitter,
  mdiStackOverflow,
  mdiPhone,
  mdiGithubCircle,
  mdiStar,
  mdiArrowRight,
  mdiCalendar,
  mdiCalendarBlank,
  mdiCalendarMonth,
  mdiCalendarClock,
  mdiMapMarker
} from "@mdi/js";
import LogoEpita from "../resources/logo_epita.svg";
import LogoFacebook from "../resources/logo_facebook.svg";
import LogoZenreach from "../resources/logo_zenreach.svg";
import LogoAlgolia from "../resources/logo_algolia.svg";

const fontFamily = {
  serif: `'IBM Plex Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif`
};

const opacity = {
  faded: `0.6`,
  fadedAccent: `0.8`
};

const margin = {
  vertical: "1cm",
  horizontal: "1.4cm"
};

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
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
  flex-grow: ${props => (props.fill ? "1" : "0")};
  height: ${props => `${(props.s * 0.2).toFixed(6)}em`};
`;

const HSep = styled.span`
  display: inline-flex;
  width: ${props => `${(props.s * 0.2).toFixed(6)}em`};
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
  row-gap: 0.2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const IconContainer = styled.span`
  margin-right: ${props => (props.size * 0.4).toFixed(6)}em;
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
  box-shadow: inset 0.18cm 0px 0px -0.02cm ${props => props.color}; */
  padding: 0.2cm ${margin.horizontal};
  box-shadow: inset 0.18cm 0px 0px -0.02cm ${props => props.color};
`;

const SectionTitle = styled.h3`
  font-family: ${fontFamily.serif};
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

const SectionTitleSecondary = styled.span`
  font-weight: 200;
`;

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
  display: inline-flex;
  padding: 0.2em 0.4em;
  /* background-color: ${props => (props.preferred ? "#f3e5f5" : "#e3f2fd")}; */
  box-shadow: 0px 0px 0px 1px
    ${props => (props.preferred ? "#e1bee7" : "#bbdefb")};
  color: ${props => (props.preferred ? "#9c27b0" : "#1e88e5")};
  border-radius: 0.2em;
  margin-right: 0.5em;
  font-weight: ${props => (props.preferred ? "600" : "400")};

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: ${props => (props.preferred ? "#9c27b0" : "#1e88e5")};
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

const LogoEpitaStyled = createLogo(LogoEpita);

const LogoFacebookStyled = createLogo(LogoFacebook);

const LogoZenreachStyled = createLogo(LogoZenreach);

const LogoAlgoliaStyled = createLogo(LogoAlgolia);

export default () => {
  return (
    <>
      <GlobalStyle />

      <Helmet bodyAttributes={{ class: "A4" }} />

      <SheetContainer className="sheet">
        <Container>
          <VContainer>
            <Title>Alexandre Kirszenberg</Title>

            <VSep s={2} />

            <Subtitle>
              Looking for a Spring internship in{" "}
              <SubtitleAccent>Software Engineering</SubtitleAccent> and{" "}
              <SubtitleAccent>Artificial Intelligence</SubtitleAccent>
            </Subtitle>

            <VSep s={5} />

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
                <Icon path={mdiGithubFace} />
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

          <VSep s={5} />

          <Sections>
            <Section color="#b3e5fc">
              <SectionTitle>
                Education{" "}
                <SectionTitleSecondary>(Graduating</SectionTitleSecondary>{" "}
                September 2020<SectionTitleSecondary>)</SectionTitleSecondary>
              </SectionTitle>

              <SectionContent>
                <SectionItem>
                  <SectionItemTitle
                    bottomInfo={
                      <>
                        <Icon path={mdiMapMarker} /> Paris
                        <HSep s={3} />
                        <Icon path={mdiCalendarClock} /> Started Jan. 2018
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
                    Student Researcher currently working on leveraging the
                    theory of <Accent>Mathematical Morphology</Accent> within{" "}
                    <Accent>Deep Neural Networks</Accent>. Previously built a{" "}
                    <Accent>Model Checking</Accent> pipeline for the{" "}
                    <Accent>Go</Accent> programming language.
                  </SectionItemSubtitle>
                </SectionItem>

                <SectionItem>
                  <SectionItemTitle
                    bottomInfo={
                      <>
                        <Icon path={mdiMapMarker} /> Paris
                        <HSep s={3} />
                        <Icon path={mdiCalendarClock} /> Started Sep. 2015
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

            <Section color="#c5e1a5">
              <SectionTitle>Professional experience</SectionTitle>

              <SectionContent>
                <SectionItem icon={<LogoEpitaStyled />}>
                  <SectionItemTitle
                    info={
                      <>
                        <Icon path={mdiMapMarker} /> Paris
                        <HSep s={3} />
                        <Icon path={mdiCalendarClock} /> Started Sep. 2017
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
                    <Strong>Java</Strong>, <Strong>SQL</Strong> and project
                    management skills to third year students.
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
                    with a new update delivery pipeline using{" "}
                    <a href="https://developers.google.com/web/fundamentals/primers/service-workers/">
                      Service Workers
                    </a>
                    . Startup time decreased by as much as 80% on slow
                    connections.
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
                    Built new features into the core product's web interface.
                    Team training on <a href="https://reactjs.org/">React</a>{" "}
                    best practices, state management, and related libraries and
                    ecosystem.
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

            <Section color="#ffe082">
              <SectionTitle>Personal projects</SectionTitle>

              <SectionContent>
                <SectionItem>
                  <SectionItemTitle>
                    <SectionItemTitleLink href="https://github.com/alexkirsz/dispatch-proxy">
                      <Icon path={mdiGithubCircle} />
                      <HSep s={2} />
                      dispatch-proxy
                    </SectionItemTitleLink>
                    <SectionItemGithubStars>
                      <Icon path={mdiStar} />
                      <HSep s={1} />
                      3,062
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
                      <Icon path={mdiGithubCircle} />
                      <HSep s={2} />
                      Facebook Sixth Sense
                    </SectionItemTitleLink>
                    <SectionItemGithubStars>
                      <Icon path={mdiStar} />
                      <HSep s={1} />
                      482
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
              <SectionTitle>Interests and Miscellaneous Skills</SectionTitle>

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
                      <Pill preferred href="https://ocaml.org/">
                        OCaml
                      </Pill>
                      <Pill preferred href="https://www.haskell.org/">
                        Haskell
                      </Pill>
                      <Pill href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                        JavaScript
                      </Pill>
                      <Pill href="https://www.python.org/">Python</Pill>
                      <Pill href="https://en.wikipedia.org/wiki/C%2B%2B">
                        C++
                      </Pill>
                      <Pill href="https://www.java.com/">Java</Pill>
                      <Pill href="https://en.wikipedia.org/wiki/C_(programming_language)">
                        C
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
                      <Pill href="https://www.tensorflow.org/">Tensorflow</Pill>
                      <Pill href="https://numpy.org/">Numpy</Pill>
                      <Pill href="https://www.scipy.org/">Scipy</Pill>
                      <Pill href="https://scikit-image.org/">Scikit Image</Pill>
                      <Pill href="https://scikit-learn.org/">Scikit Learn</Pill>
                    </Pills>
                  </SectionItemSubtitle>
                </SectionItem>

                <SectionItem>
                  <SectionItemTitle>Graphic Design</SectionItemTitle>

                  <SectionItemSubtitle>
                    <Pills>
                      <Pill href="https://www.adobe.com/products/photoshop.html">
                        Adobe Photoshop
                      </Pill>
                      <Pill href="https://www.adobe.com/products/illustrator.html">
                        Adobe Illustrator
                      </Pill>
                      <Pill href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                        HTML
                      </Pill>
                      <Pill href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                        CSS
                      </Pill>
                    </Pills>
                  </SectionItemSubtitle>
                </SectionItem>
              </SectionContent>
            </Section>
          </Sections>

          <VSep s={5} />

          <Footer>
            An interactive and up-to-date version of this document is available
            at <a href="https://kirszenberg.com/cv">kirszenberg.com/cv</a>
          </Footer>
        </Container>
      </SheetContainer>
    </>
  );
};
