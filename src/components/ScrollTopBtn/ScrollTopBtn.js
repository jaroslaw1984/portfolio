import React, { Component } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollIntoView from "react-scroll-into-view";
import styled from "styled-components";
import color from "../../Colors/Colors";

const Style = styled.div`
  .btn_wrapper {
    position: fixed;
    width: 35px;
    height: 35px;
    right: 15px;
    bottom: 10px;
    font-size: 2rem;
    border: 2px solid ${color.orange};
    border-radius: 50%;
    display: none;
    opacity: 0;
    transform: rotate(-90deg);
    color: ${color.white};
    transition: all 0.3s ease-in;
    cursor: pointer;
  }
  .btn_scroll {
    position: relative;
    height: 100%;
    border-radius: 50%;
    background-color: ${color.orangeOpacity};
  }
  .arrow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(-50%, -50%);
  }
`;

class ScrollTopBtn extends Component {
  render() {
    return (
      <Style>
        <ScrollIntoView selector="#scrollTop">
          <div className="btn_wrapper">
            <div className="btn_scroll">
              <FontAwesomeIcon icon={faAngleRight} className="arrow" />
            </div>
          </div>
        </ScrollIntoView>
      </Style>
    );
  }
}
export default ScrollTopBtn;
