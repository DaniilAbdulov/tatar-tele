import React from "react";
import { observer } from "mobx-react-lite";
import { TimePart } from "./TimePart";
import { Verb } from "./Verb";
import { Flex, Space } from "antd";
import { Pronoun } from "./Pronoun";

export const Task = observer(() => {
    return (
        <Flex>
            <Space>
            <Pronoun/>
            <TimePart/>
            <Verb/>
            </Space>
        </Flex>
    );
});
