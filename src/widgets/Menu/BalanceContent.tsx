import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { MenuEntrySub, LinkLabelSub } from "./MenuEntrySub";
import { PushedProps } from "./types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props {
  balance?: number;
  cost?: number;
}

const BalanceArea = styled.div`
  width: 140px;
  margin: auto 10px;
  display: flex;
  flex-direction: row;
`;

const Balance = styled.div`
  font: normal normal bold 20px/24px Swis721 BT;
  color: #4C566C;
  font-size: 15px;
  opacity: 1;
`;

const Cost = styled.div`
  margin-left: 10px;
  font: normal normal bold 20px/24px Swis721 BT;
  color: #4C566C;
  font-size: 15px;
  opacity: 0.5;
`;

const BalanceContent: React.FC<Props> = ({ balance = 0, cost = 0 }) => {
  return (
    <BalanceArea>
      <Balance>{balance}</Balance>
      <Cost>${cost.toFixed(2)}</Cost>
    </BalanceArea>
  );
};

export default BalanceContent;
