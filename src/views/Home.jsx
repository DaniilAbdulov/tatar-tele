import React from "react";
import { observer } from "mobx-react-lite";
import { Card} from "antd";
import { homeStore } from "../stores/views/HomeStore.js";
import { NavLink } from "react-router-dom";

export const Home = observer(() => {
    const lessons = homeStore.lessons;
    const gridStyle = {
        width: "25%",
        textAlign: "center",
        cursor: "pointer",
    };
    return (
        <Card title="Выберите урок">
            {lessons &&
                lessons?.length &&
                lessons.map((lesson) => {
                    return (
                        <Card.Grid style={gridStyle} key={lesson.id}>
                            <NavLink
                                style={{ color: "black" }}
                                to={lesson.path}
                            >
                                {lesson.title}
                            </NavLink>
                        </Card.Grid>
                    );
                })}
        </Card>
    );
});
