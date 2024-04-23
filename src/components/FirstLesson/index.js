import React from "react";
import { observer } from "mobx-react-lite";
import { Button, Card, Flex, List, Typography } from "antd";
//import { homeStore } from "../stores/views/HomeStore.js";

export const FirstLesson = observer(() => {
    //const data = homeStore.data;
    //const setRoute = (value) => homeStore.setRoute(value);
    return (
        <Flex align="center" justify="center" style={{ marginTop: "30px" }}>
            Hello Worlds It's first lesson
        </Flex>
    );
});
