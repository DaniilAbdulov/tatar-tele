import React from "react";
import { Task } from "./Task/index";
import { Answer } from "./Answer/Answer";
import { Variants } from "./Variants/Variants";
import { Divider, Flex } from "antd";
import { CheckAnswer } from "./CheckAnswer";


export const Content = () => {
    return (
        <Flex vertical align='center'>
          <Task/>
          <Divider />
          <Answer/>
          <Divider />
          <Variants/>
          <Divider />
          <CheckAnswer/>
        </Flex>
    );
};
