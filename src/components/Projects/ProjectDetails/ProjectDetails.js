import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import ScrollIntoView from "react-scroll-into-view";
import data from "../../../data/data";
import styled from "styled-components";
import color from "../../../Colors/Colors";
import size from "../../../Fonts/Fonts";

const Style = styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
  }

  .image_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imgMargin {
    width: 100%;
    margin: 10px 0 30px;
    @media screen and (min-width: ${size.resolutionMd}) {
      width: 90%;
    }
    @media screen and (min-width: ${size.resolutionDesk}) {
      width: 70%;
    }
    @media screen and (min-width: ${size.resolutionDeskL}) {
      width: 50%;
    }
    @media screen and (max-width: ${size.resolutionSmLands}) and (orientation: landscape) {
      width: 90%;
    }
  }
  .button {
    flex-basis: 50%;
    margin: 10px 10px 30px;
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 1;
    @media screen and (min-width: ${size.resolutionMd}) {
      flex-basis: 30%;
      font-size: ${size.BtnLinkMd};
    }
  }
  .buttonsWrapper {
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  .goBackWrapper {
    margin-top: 30px;
    padding: 0 15px;
    font-size: ${size.BtnLinkXs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.BtnLinkSm};
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      font-size: ${size.BtnLinkMd};
    }
    @media screen and (min-width: ${size.resolutionDesk}) {
      font-size: ${size.BtnLinkDesk};
    }
  }
  .buttonLink {
    width: 50%;
    padding: 6px 8px;
    text-decoration: none;
    text-align: center;
    color: ${color.light_blue};
    border: 1px solid ${color.light_blue};
    border-radius: 0.25rem;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: ${size.BtnLinkXs};
    @media screen and (min-width: ${size.resolutionSm}) {
      font-size: ${size.BtnLinkSm};
    }
    @media screen and (min-width: ${size.resolutionMd}) {
      font-size: ${size.BtnLinkMd};
    }
  }
  .buttonLink:hover {
    background-color: ${color.light_blue};
    color: ${color.white};
  }
  .iconTools {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
    @media screen and (min-width: ${size.resolutionSm}) {
      justify-content: flex-start;
    }
  }
  .icons_img {
    @media screen and (min-width: ${size.resolutionSm}) {
      margin-left: 50px;
    }
  }
`;
const H2 = styled.h2`
  font-size: ${size.H2Xs};
  font-weight: 700;
  text-transform: uppercase;
  padding: 0 15px;
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.H2Sm};
  }
  @media screen and (min-width: ${size.resolutionMd}) {
    font-size: ${size.H2Md};
  }
  @media screen and (min-width: ${size.resolutionDesk}) {
    font-size: ${size.H2Desk};
  }
  @media screen and (min-width: ${size.resolutionDeskL}) {
    font-size: ${size.H2DeskL};
  }
`;

const P = styled.p`
  margin: 30px 20px;
  padding: 0 15px;
  font-size: ${size.PXs};
  @media screen and (min-width: ${size.resolutionSm}) {
    font-size: ${size.PSm};
  }
  @media screen and (min-width: ${size.resolutionMd}) {
    font-size: ${size.PMd};
  }
  @media screen and (min-width: ${size.resolutionDesk}) {
    font-size: ${size.PDesk};
  }
  @media screen and (min-width: ${size.resolutionDeskL}) {
    font-size: ${size.PDeskL};
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media screen and (min-width: ${size.resolutionMd}) {
    width: 70px;
    height: 70px;
  }
`;

class ProjectDetails extends Component {
  render() {
    const { match, checked } = this.props;
    const detail = data.projectsContent.find(
      ({ id }) => id === match.params.id
    );
    const iconTools = detail.programingTools.map(icon => (
      <a
        target="_blank"
        rel="noopener noreferrer"
        key={icon.id}
        href={icon.url}
        className="icons_img"
      >
        <Img src={icon.img} alt={icon.name} title={icon.name} />
      </a>
    ));
    const contents = detail.detailsContenet.map(content => (
      <div key={content.id} className="wrapperContent">
        <H2>{checked ? content.title_en : content.title_pl}</H2>
        <P>{checked ? content.description_en : content.description_pl}</P>
        <div className="image_wrapper">
          <Image
            src={content.m_img}
            title={match.params.id}
            alt={match.params.id}
            className="imgMargin"
            fluid
            rounded
          />
        </div>
      </div>
    ));
    const buttons = detail.buttonDetails.map(button => (
      <Button
        className="button"
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        key={button.id}
        href={button.url}
      >
        {checked ? button.name_en : button.name_pl}
      </Button>
    ));

    return (
      <Style>
        <div id="start" className="wrapper">
          {contents}
          <P>
            {checked
              ? "Tools used to make a project:"
              : "Narzędzia użyte do wykonania projektu:"}
          </P>
          <div className="iconTools">{iconTools}</div>
          <div className="goBackWrapper">
            <ScrollIntoView selector="#scrollTop">
              <Link className="buttonLink" to="/projects">
                {checked ? "Go back" : "Powrót"}
              </Link>
            </ScrollIntoView>
          </div>
          <div className="button buttonsWrapper">{buttons}</div>
        </div>
      </Style>
    );
  }
}
export default ProjectDetails;
