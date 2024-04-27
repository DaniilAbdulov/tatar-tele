import React from "react";
import { observer } from "mobx-react-lite";
import { firstLessonStore } from "../../../../stores/components/FirstLesson/FirstLessonStore";
import { Flex, Button } from "antd";

export const Variants = observer(() => {
const variants = firstLessonStore?.variants || [];

const variantClick = (value) => {
    firstLessonStore.setUserAnswer(value);
}

return (
    <Flex gap="small">
        <Flex gap="small" wrap="wrap" align="center" justify="center">
            {variants.length > 0 && (
                variants.map((v) => <Button size='middle' key={v.id} onClick={() => variantClick(v)}>{v.value}</Button>
                )
            )}
        </Flex>
    </Flex>
);
});