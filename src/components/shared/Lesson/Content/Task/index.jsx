import React from "react";
import { LESSONS } from "../../../../../data";
import { TimePart } from "../../../../FirstLesson/Content/Task/TimePart";
import { Verb } from "../../../../FirstLesson/Content/Task/Verb";
import { Flex, Space } from "antd";
import { Pronoun } from "../../../../FirstLesson/Content/Task/Pronoun";
import { Noun } from "./Noun";
import { Case } from "./Case";

export const Task = ({task}) => {
    if (task?.lessonId === LESSONS.FIRST) {
        return (
            <Flex>
                <Space>
                <Pronoun/>
                <TimePart/>
                <Verb/>
                </Space>
            </Flex>
        );
    }
    if (task?.lessonId === LESSONS.SECOND) {
        return (
            <Flex>
                <Space>
                  <Case/>
                  <Noun/>
                </Space>
            </Flex>
        );
    }
    return (
        <div>
            None
        </div>
    )

};
