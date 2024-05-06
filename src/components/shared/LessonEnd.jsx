
import { Modal, Result } from "antd";
import { observer } from "mobx-react-lite";
import { progressStore } from "../../stores/components/ProgressStore";
import { useNavigate } from "react-router";


export const LessonEnd = observer(() => {
  const showModal = progressStore.lessonIsDone;

  const navigate = useNavigate();

  const okHandler = () => {
    progressStore.resetStore();
  };

  const cancelHandler = () => {
    navigate('/')
    progressStore.resetStore();
  }


  return (
    <>
      <Modal
        centered
        open={showModal}
        onOk={() => okHandler()}
        onCancel={() => cancelHandler()}
        cancelText='К списку уроков'
        okText='Повторить'
        closable={false}
      >
  <Result
    status="success"
    title="Поздравляем! Вы прошли данный урок!"
    subTitle="Можете вернуться к списку уроков или же повторить данный урок"
  />
      </Modal>
    </>
  );
});

