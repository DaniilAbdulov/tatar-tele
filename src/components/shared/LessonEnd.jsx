
import { Modal, Result } from "antd";
import { observer } from "mobx-react-lite";
import { progressStore } from "../../stores/components/ProgressStore";

export const LessonEnd = observer(() => {
  //const showModal = progressStore.lessonIsDone;
  const showModal = false;


  const okHandler = () => {
    //progressStore.resetStore();
  };

  const cancelHandler = () => {
    console.log(`Переход к списку уроков`)
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
      >
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  />
      </Modal>
    </>
  );
});

