import { Flex, Progress } from "antd";
import { observer } from "mobx-react-lite";
import { progressStore } from "../../stores/components/ProgressStore";

export const LinearProgress = observer(() => { 
    const progressPercent = progressStore?.percent;

return ( 
<Flex vertical gap="middle"> 
<Flex vertical gap="small" style={{ width: 300 }}> 
<Progress percent={progressPercent} size={[300, 20]} /> 
</Flex> 
</Flex> 
); 
});