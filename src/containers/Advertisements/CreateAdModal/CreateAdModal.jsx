import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class CreateAdModal extends Component {
  state = {};
  render() {
    return (
      <Modal isOpen={this.props.show} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>
          Create Advertisement
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <div className="d-flex flex-row justify-content-center">
            <button className="btn btn-danger mx-1" onClick={this.props.toggle}>
              Cancel
            </button>
            <button className="btn btn-success mx-1">Create</button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

export default CreateAdModal;
