import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Route } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import color from "../../Colors/Colors";
import waves from "../../images/waves.jpg";
import data from "../../data/data";
import progr from "../../images/progr.jpg";

const fadieIn = () => keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;
const RedLineIn = () => keyframes`
    0% {
      right: 100%;
    }
    100% {
      right: 80%;
    }
`;
const imgMove = () => keyframes`
    0% {
      background-position: center 
    }
    10% {
      background-position: center 
    }
    90% {
      background-position: left 0% 
    }
    100% {
      background-position: left 0%
    }
`;

const Styles = styled.div`
  .jumbo {
    position: relative;
    min-height: 100vh;
    color: ${color.white};
    background: url(${progr});
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    animation: ${imgMove} 10s 1s alternate both linear infinite;
    z-index: 0;
    @media (min-width: 768px) {
      background: url(${waves});
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
  .center {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    @media (min-width: 768px) {
      width: auto;
    }
  }
  .title {
    font-size: 1rem;
    @media (min-width: 414px) {
      font-size: 1.3rem;
    }
    animation: ${fadieIn} 2s ease;
  }
  .titleParagraph {
    animation: ${fadieIn} 2s 1s both;
  }
  .titleSecondParagraph {
    animation: ${fadieIn} 2s 2s both;
  }
  .redLine {
    position: absolute;
    top: -10%;
    left: 0;
    bottom: 108%;
    height: 3px;
    background: ${color.red};
    animation: ${RedLineIn} 2s 3s both;
  }
  /* .subTitleSize {
    font-size: 2rem;
    @media (min-width: 414px) {
      font-size: 2.2rem;
    }
  } */
`;
const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 40px;
  font-weight: 700;
  @media (min-width: 414px) {
    font-size: 2rem;
  }
`;
const H3 = styled(H2)``;

const Jumbo = ({ checked }) => {
  const {
    title_en,
    title_pl,
    titleParagraph_en,
    titleParagraph_pl,
    titleSecondParagraph_en,
    titleSecondParagraph_pl
  } = data.jumboContent;

  // This function is used for title header
  function titleH2(title_text_en, title_text_pl, class_name) {
    return (
      <>
        <span className="redLine"></span>
        <H2
          className={
            class_name ? "titleParagraph " + class_name : "titleParagraph"
          }
        >
          {checked ? title_text_en : title_text_pl}
        </H2>
      </>
    );
  }
  return (
    <Styles>
      <Jumbotron fluid className="jumbo" id="scrollTop">
        <div className="overlay">
          <div className="center">
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <span className="redLine"></span>
                  <p className="title">{checked ? title_en : title_pl}</p>
                  {titleH2(titleParagraph_en, titleParagraph_pl)}
                  <H3 className="titleSecondParagraph">
                    {checked
                      ? titleSecondParagraph_en
                      : titleSecondParagraph_pl}
                  </H3>
                </>
              )}
            />
            <Route
              path="/projects"
              render={() => (
                <>
                  {titleH2(
                    "Completed projects",
                    "Wykonane projekty",
                    "subTitleSize"
                  )}
                </>
              )}
            />
            <Route
              path="/:page/:id"
              render={props => (
                <>
                  {titleH2(
                    `Project ${props.match.params.id}`,
                    `Projekt ${props.match.params.id}`,
                    "subTitleSize"
                  )}
                </>
              )}
            />
            <Route
              path="/czat"
              render={() => (
                <>
                  {titleH2(
                    "Talk whit me...",
                    "Porozmawiaj ze mna...",
                    "subTitleSize"
                  )}
                </>
              )}
            />
            <Route
              path="/about"
              render={() => (
                <>
                  {titleH2("All about me", "Wszystko o mnie", "subTitleSize")}
                </>
              )}
            />
          </div>
        </div>
      </Jumbotron>
    </Styles>
  );
};

export default Jumbo;
