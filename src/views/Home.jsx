import React from "react";
import { observer } from "mobx-react-lite";
import { Button, Card, Flex, List, Typography } from "antd";
import { homeStore } from "../stores/views/HomeStore.js";
import { NavLink } from "react-router-dom";

export const Home = observer(() => {
    const data = homeStore.data;
    const setRoute = (value) => homeStore.setRoute(value);
    return (
        <Flex align="center" justify="center" style={{ marginTop: "30px" }}>
            <List
                grid={{
                    gutter: 16,
                    column: 4,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>
                            <Flex vertical justify="space-around">
                                <Typography>{item.value}</Typography>
                                <NavLink to={item.path}>
                                    <Button>Начать</Button>
                                </NavLink>
                            </Flex>
                        </Card>
                    </List.Item>
                )}
            />
        </Flex>
    );
});
