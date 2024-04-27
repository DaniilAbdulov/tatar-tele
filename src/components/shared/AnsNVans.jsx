import React from "react";
import { Flex, Button } from "antd";

export const AnsNVans = ({array, handler}) => {
const clickHandler = (value) => {
    handler(value);
}

return (
    <Flex gap="small">
        <Flex gap="small" wrap="wrap" align="center" justify="center">
            {array.length > 0 && (
                array.map((v) => <Button size='middle' key={v.id} onClick={() => clickHandler(v)}>{v.value}</Button>
                )
            )}
        </Flex>
    </Flex>
  );
};