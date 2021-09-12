import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

export const Loading: React.VFC = () => {
  const Styled = styled.div`
    z-index: 2147483647;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    background: rgba(100, 100, 100, 0.5);

    .container {
      margin: auto;
    }
  `;

  return (
    <Styled>
      <div className="container">
        <ReactLoading type="spin" />
      </div>
    </Styled>
  );
};
