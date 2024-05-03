import React from "react";
import { Flex, Button } from "antd";

export const AnsVans = ({array, handler}) => {
console.log(`AnsVans`);
const clickHandler = (value) => {
    console.log(`clickHandler`)
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