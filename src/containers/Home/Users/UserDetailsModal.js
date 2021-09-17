import axios from 'axios'
import React, { Component } from 'react'
import api from "../../../routes/api"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export class UserDetailsModal extends Component {
    state = {
        userdetail: "",
    }
    componentDidMount() {
        axios.get(api.developmentServer + "/user/" + this.props.id).then(res => {
            this.setState({ userdetail: res.data.result })
            console.log(this.state.userdetail)
        })
    }
    render() {
        return (
            <div>
                <Modal size="lg" isOpen={this.props.show} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>
                        <h3>User Details</h3>
                    </ModalHeader>
                    <ModalBody>
                        <div className="d-flex flex-column py-3">
                            <div className="my-2">
                                <h3>Name : </h3>
                                <h4>{this.state.userdetail.username}</h4>
                            </div>
                            <div className="my-2">
                                <h3>Email : </h3>
                                <h4>{this.state.userdetail.email}</h4>
                            </div>
                            <div className="my-2">
                                <h3>Contact : </h3>
                                <h4>{this.state.userdetail.contact}</h4>
                            </div>
                            <div className="my-2">
                                <h3>Address : </h3>
                                <h4>{this.state.userdetail.address}</h4>
                            </div>
                            <div className="my-2">
                                <h3>Primember : </h3>
                                <h4>{this.state.userdetail.primemember?"Yes":"No"}</h4>
                            </div>
                            <div className="my-2">
                                <h3>Role : </h3>
                                <h4>{this.state.userdetail.role}</h4>
                            </div>
                            <div className="my-2">
                                <h3>Account Details : </h3>
                                <h4>{this.state.userdetail.acdetail?this.state.userdetail.acdetail:"None"}</h4>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="d-flex flex-row justify-content-center">
                            <button className="btn btn-primary mx-1" onClick={this.props.toggle}>
                                Close
                            </button>
                        </div>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default UserDetailsModal
