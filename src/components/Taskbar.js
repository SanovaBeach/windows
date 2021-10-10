import styled from "styled-components/macro";
import logo from "../assets/Windows_logo.svg";
import search from "../assets/search.svg";
import { Status } from "./Status";

const S = {
  Taskbar: styled.div`
    display: flex;
    align-items: center;
    background-color: lightgray;
    width: 100%;
    height: 5rem;
    position: absolute;
    bottom: 0;
  `,
  Image: styled.img`
    height: 50%;
    margin: 0 1rem;
  `,
  Label: styled.label`
    position: relative;
    width: 18%;
  `,
  SearchIcon: styled.img`
    height: 2rem;
    position: absolute;
    top: 13px;
    left: 10px;
  `,
  Input: styled.input`
    width: 100%;
    padding: 1.35rem;
    z-index: -1;
    border: 1px solid gray;
    padding-left: 4rem;
    font-size: 1.8rem;
  `,
};

export const Taskbar = () => {
  return (
    <S.Taskbar>
      <S.Image src={logo} alt="windows logo" />
      <S.Label htmlFor="search">
        <S.SearchIcon src={search} />
        <S.Input
          type="text"
          id="search"
          aria-label="search"
          placeholder="Type here to search"
        />
      </S.Label>
      <Status />
    </S.Taskbar>
  );
};
