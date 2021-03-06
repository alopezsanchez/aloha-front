import "./modal.scss";
import React from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardHeader,
  ModalCardTitle,
  ModalCardBody,
  ModalCardFooter,
  Delete,
  Button
} from "bloomer";

function AlohaModal({ isActive, title, onConfirm, onCancel, children }) {
  return (
    <Modal className="offices-modal" isActive={isActive}>
      <ModalBackground />
      <ModalCard>
        <ModalCardHeader>
          <ModalCardTitle>{title}</ModalCardTitle>
          <Delete onClick={onCancel} />
        </ModalCardHeader>
        <ModalCardBody>{children}</ModalCardBody>
        <ModalCardFooter>
          <Button className="is-light" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </ModalCardFooter>
      </ModalCard>
    </Modal>
  );
}

AlohaModal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default AlohaModal;
