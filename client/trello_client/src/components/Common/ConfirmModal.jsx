
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import parse from "html-react-parser"
import { MODEL_ACTION_CLOSE, MODEL_ACTION_CONFIRM } from "../../utilities/constant.js"
function ConfirmModal(props) {
  const { title, content, show, onAction } = props
  return (
    <>
      {show && (
        <Modal show={true} onHide={() => onAction(MODEL_ACTION_CLOSE)} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{parse(content)}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => onAction(MODEL_ACTION_CLOSE)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => onAction(MODEL_ACTION_CONFIRM)}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

ConfirmModal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default ConfirmModal;
