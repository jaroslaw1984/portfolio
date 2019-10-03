import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import color from "../../../Colors/Colors";
import size from "../../../Fonts/Fonts";

const fadieIn = () => keyframes`
    from {
      transform: translateY(-30px)
    }
    to {
      transform: translateY(0)
    }
`;

const Style = styled.div`
  .wrapper_tag {
    display: grid;
    grid-template-columns: 1fr;
    transition: all 0.2s;
    margin-top: 20px;
    cursor: pointer;
  }
  .title_wrapper {
    display: grid;
    grid-template-columns: 1fr 30px;
    margin-top: 5px;
    transition: all 0.5s;
  }
  .tag_isActive {
    width: 100%;
    margin: 0;
    border-radius: 2px;
    background-color: ${color.blue};
    color: ${color.white};
    transition: all 1s;
  }
  .icon_active_tag {
    display: flex;
    align-self: center;
    color: ${color.orange};
    font-weight: 900;
    font-size: 1.5rem;
    transition: 0.3s ease-in;
  }
  .close_tag {
    display: none;
    transition: all 1s;
  }
  .open_tag {
    display: block;
    animation: ${fadieIn} 1s;
  }
  article {
    padding: 10px 15px;
  }
  article > p {
    padding: 10px 0 0 10px;
  }
`;

const H3 = styled.h3`
  padding: 15px;
  font-size: 1.2rem;
  font-weight: 900;
  font-size: ${size.TH3Xs};
  @media screen and (min-width: 414px) {
    font-size: ${size.TH3Sm};
  }
`;
const P = styled.p`
  font-size: ${size.PXs};
  @media screen and (min-width: 414px) {
    font-size: ${size.PSm};
  }
`;

class Tags extends Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      <Style>
        <section className="wrapper_tag" onClick={this.handleClick}>
          <div
            className={
              this.props.isActive
                ? "title_wrapper tag_isActive"
                : "title_wrapper"
            }
          >
            <H3>
              {this.props.checked ? this.props.title_en : this.props.title_pl}
            </H3>
            <div className="icon_active_tag">
              {this.props.isActive ? "-" : "+"}
            </div>
          </div>
          <article className={this.props.isActive ? "open_tag" : "close_tag"}>
            <P>
              {this.props.checked
                ? this.props.description_en
                : this.props.description_pl}
            </P>
          </article>
        </section>
      </Style>
    );
  }
}

export default Tags;