import styled from "styled-components/macro";
import {
  BiNotification,
  BiVolumeFull,
  BiWifi,
  BiBattery,
  BiUpArrowAlt,
} from "react-icons/bi";
import dayjs from "dayjs";

const S = {
  Status: styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    right: 0px;
  `,
  Date: styled.p`
    margin: 0 1rem;
  `,
};

export const Status = () => {
  return (
    <S.Status>
      <BiBattery size={20} style={{ marginRight: "20px" }} />
      <BiWifi size={20} style={{ marginRight: "20px" }} />
      <BiVolumeFull size={20} style={{ marginRight: "20px" }} />
      <S.Date>{dayjs().format("MMM/DD/YYYY")}</S.Date>
      <BiNotification size={20} style={{ marginRight: "20px" }} />
    </S.Status>
  );
};
