import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleCloseModal}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleCloseModal} actionBar={actionBar}>
      <p>Here is something to accept</p>
    </Modal>
  );
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere commodo felis id volutpat. Duis malesuada lectus eget eleifend
        sodales. Suspendisse potenti. Vestibulum hendrerit vestibulum sagittis.
        Fusce ut justo eget velit convallis ullamcorper id at massa. Vestibulum
        lectus neque, tempus at ante vitae, sagittis ullamcorper eros. Duis
        sodales cursus tristique. Suspendisse aliquet nulla ac lectus gravida,
        vitae sodales quam ullamcorper. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere commodo felis id volutpat. Duis malesuada lectus eget eleifend
        sodales. Suspendisse potenti. Vestibulum hendrerit vestibulum sagittis.
        Fusce ut justo eget velit convallis ullamcorper id at massa. Vestibulum
        lectus neque, tempus at ante vitae, sagittis ullamcorper eros. Duis
        sodales cursus tristique. Suspendisse aliquet nulla ac lectus gravida,
        vitae sodales quam ullamcorper. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere commodo felis id volutpat. Duis malesuada lectus eget eleifend
        sodales. Suspendisse potenti. Vestibulum hendrerit vestibulum sagittis.
        Fusce ut justo eget velit convallis ullamcorper id at massa. Vestibulum
        lectus neque, tempus at ante vitae, sagittis ullamcorper eros. Duis
        sodales cursus tristique. Suspendisse aliquet nulla ac lectus gravida,
        vitae sodales quam ullamcorper. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere commodo felis id volutpat. Duis malesuada lectus eget eleifend
        sodales. Suspendisse potenti. Vestibulum hendrerit vestibulum sagittis.
        Fusce ut justo eget velit convallis ullamcorper id at massa. Vestibulum
        lectus neque, tempus at ante vitae, sagittis ullamcorper eros. Duis
        sodales cursus tristique. Suspendisse aliquet nulla ac lectus gravida,
        vitae sodales quam ullamcorper. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere commodo felis id volutpat. Duis malesuada lectus eget eleifend
        sodales. Suspendisse potenti. Vestibulum hendrerit vestibulum sagittis.
        Fusce ut justo eget velit convallis ullamcorper id at massa. Vestibulum
        lectus neque, tempus at ante vitae, sagittis ullamcorper eros. Duis
        sodales cursus tristique. Suspendisse aliquet nulla ac lectus gravida,
        vitae sodales quam ullamcorper. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere commodo felis id volutpat. Duis malesuada lectus eget eleifend
        sodales. Suspendisse potenti. Vestibulum hendrerit vestibulum sagittis.
        Fusce ut justo eget velit convallis ullamcorper id at massa. Vestibulum
        lectus neque, tempus at ante vitae, sagittis ullamcorper eros. Duis
        sodales cursus tristique. Suspendisse aliquet nulla ac lectus gravida,
        vitae sodales quam ullamcorper. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere commodo felis id volutpat. Duis malesuada lectus eget eleifend
        sodales. Suspendisse potenti. Vestibulum hendrerit vestibulum sagittis.
        Fusce ut justo eget velit convallis ullamcorper id at massa. Vestibulum
        lectus neque, tempus at ante vitae, sagittis ullamcorper eros. Duis
        sodales cursus tristique. Suspendisse aliquet nulla ac lectus gravida,
        vitae sodales quam ullamcorper. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere commodo felis id volutpat. Duis malesuada lectus eget eleifend
        sodales. Suspendisse potenti. Vestibulum hendrerit vestibulum sagittis.
        Fusce ut justo eget velit convallis ullamcorper id at massa. Vestibulum
        lectus neque, tempus at ante vitae, sagittis ullamcorper eros. Duis
        sodales cursus tristique. Suspendisse aliquet nulla ac lectus gravida,
        vitae sodales quam ullamcorper. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere commodo felis id volutpat. Duis malesuada lectus eget eleifend
        sodales. Suspendisse potenti. Vestibulum hendrerit vestibulum sagittis.
        Fusce ut justo eget velit convallis ullamcorper id at massa. Vestibulum
        lectus neque, tempus at ante vitae, sagittis ullamcorper eros. Duis
        sodales cursus tristique. Suspendisse aliquet nulla ac lectus gravida,
        vitae sodales quam ullamcorper. In hac habitasse platea dictumst.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        posuere commodo felis id volutpat. Duis malesuada lectus eget eleifend
        sodales. Suspendisse potenti. Vestibulum hendrerit vestibulum sagittis.
        Fusce ut justo eget velit convallis ullamcorper id at massa. Vestibulum
        lectus neque, tempus at ante vitae, sagittis ullamcorper eros. Duis
        sodales cursus tristique. Suspendisse aliquet nulla ac lectus gravida,
        vitae sodales quam ullamcorper. In hac habitasse platea dictumst.
      </p>
      <Button primary onClick={handleOpenModal}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
