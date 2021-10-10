import styled from "styled-components/macro";
import { Taskbar } from ".";

const S = {
  Windows: styled.div`
    background-color: #00adef;
    height: 100vh;
  `,
};

export const Windows = () => {
  return (
    <S.Windows>
      <Taskbar />
    </S.Windows>
  );
};
