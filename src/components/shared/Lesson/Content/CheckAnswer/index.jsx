import React from "react";
import { Button} from "antd";


export const CheckAnswer = ({store}) => {
    const checkHandler = () => {
        store.checkAnswer();
    }

    return (
        <Button type="primary" onClick={()=> checkHandler()}>Проверить ответ</Button>
    );
};
