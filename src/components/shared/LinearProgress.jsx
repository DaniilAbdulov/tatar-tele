import {Flex, Progress} from 'antd';
import {observer} from 'mobx-react-lite';
import {progressStore} from '../../stores/components/ProgressStore';
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router';

export const LinearProgress = observer(() => {
  const [showProgress, setShowProgress] = useState(false);
  const progressPercent = progressStore?.percent;

  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      setShowProgress(false);
      return;
    }
    setShowProgress(true);
    progressStore.resetStore();
  }, [pathname]);

  return !showProgress ? (
    <Flex vertical gap="middle">
      <Flex vertical gap="small" style={{width: 300}}>
        <Progress showInfo={false} percent={progressPercent} size={[300, 20]} />
      </Flex>
    </Flex>
  ) : (
    <div></div>
  );
});
