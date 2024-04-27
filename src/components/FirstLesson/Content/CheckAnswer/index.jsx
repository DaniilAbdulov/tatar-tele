import React from "react";
import { observer } from "mobx-react-lite";
import { firstLessonStore } from "../../../../stores/components/FirstLesson/FirstLessonStore";
import { Button} from "antd";


export const CheckAnswer = observer(() => {

    const checkHandler = () => {
        firstLessonStore.checkAnswer();
    }

    return (
        <Button type="primary" onClick={()=> checkHandler()}>Проверить ответ</Button>
    );
});
