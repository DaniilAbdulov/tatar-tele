import {Flex, Progress} from 'antd';
import {observer} from 'mobx-react-lite';
import {progressStore} from '../../stores/components/ProgressStore';

export const LinearProgress = observer(() => {
  const lessonId = progressStore?.lessonId;
  const progressPercent = progressStore?.percent;
  console.log(lessonId);
  return (lessonId &&
    <Flex vertical gap="middle">
      <Flex vertical gap="small" style={{width: 300}}>
        <Progress percent={progressPercent} size={[300, 20]} />
      </Flex>
    </Flex>
  );
});
