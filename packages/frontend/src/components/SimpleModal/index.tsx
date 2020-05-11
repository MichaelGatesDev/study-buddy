import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

interface Props {
  headerContents?: JSX.Element;
  contents?: JSX.Element;
  footerContents?: JSX.Element;
  onHide?: (success?: boolean) => void;
  visible?: boolean;
}
export const SimpleModal = (props: Props): JSX.Element => {
  return (
    <Modal
      show={props.visible}
      onHide={(): void => {
        props.onHide?.();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.headerContents}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.contents}</Modal.Body>
      <Modal.Footer>{props.footerContents}</Modal.Footer>
    </Modal>
  );
};

interface ConfirmationModalProps extends Props {
  closeButtonText: string;
  confirmButtonText: string;
}
export const ConfirmationModal = (
  props: ConfirmationModalProps
): JSX.Element => {
  return (
    <SimpleModal
      {...props}
      footerContents={
        <>
          <Button
            variant="secondary"
            onClick={(): void => {
              props.onHide?.();
            }}
          >
            {props.closeButtonText}
          </Button>
          <Button
            variant="primary"
            onClick={(): void => {
              props.onHide?.(true);
            }}
          >
            {props.confirmButtonText}
          </Button>
        </>
      }
    />
  );
};
