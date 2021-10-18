import axios from 'axios'
import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import api from '../../routes/api'
class ChatModal extends Component {
    state = {
        user: JSON.parse(localStorage.getItem("user")),
        seller: "",
        chats: [],
        msg:"",
    }
    sendMessage =()=>{
        if(this.state.msg==="")
        {
    
        }
        else{
        const body={
           sender:this.state.user.id,
           receiver:this.props.seller,
           content:this.state.msg, 
        }
        this.setState({msg:""})
        axios.post(api.developmentServer+"/chat/send-message",body, {
            headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
        }).then(res=>{
            if(res.data.responseType===true)
            {
                this.getAllChats();
                this.mainInput.value = "";
            }
        }).catch(err=>console.log(err))
    }
    }
    getSellerDetail = async () => {
        axios.get(api.developmentServer + "/users/" + this.props.seller, {
            headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
        }).then(
            (res) => {
                if (res.data.responseType) {
                    console.log(res.data.result)
                    this.setState({ seller: res.data.result })
                }
            }
        ).catch(err => {
            console.log(err)
        })
    }
    getAllChats = async () => {
        const body = {
            id1: this.state.user.id,
            id2: this.props.seller,
        }
        axios.post(api.developmentServer + "/chat/get-all-chat", body, {
            headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
        }).then(
            (res) => {
                if (res.data.responseType) {
                    this.setState({ chats: res.data.results })
                    console.log(this.state.chats)
                }
            }
        ).catch(err => {
            console.log(err)
        })
    }
    componentDidUpdate(pP,pS,sS)
    {
        if(pS.chats!==this.state.chats)
        {
            this.getAllChats();
        }
    }
    componentWillMount() {
        if (!this.state.user) {
            this.props.history.replace("/login");
        } else if (this.props.seller !== 0) {
            this.getSellerDetail();
            this.getAllChats();
        }
        else { }
    }
    render() {
        return (
            <div>
                <Modal size="xl" isOpen={this.props.show} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle} className="bg-success">
                        <h5 className="text-white">{this.state.seller.username}</h5>
                    </ModalHeader>
                    <ModalBody className="bg-secondary">
                        {(this.state.chats.length > 0) ?
                            <div>
                                {this.state.chats.map(chat => (
                                    (chat.sender === this.state.user.id) ?
                                        <div key={chat.id}>
                                            <div>{chat.content}</div>
                                            <div>{chat.timestamp}</div>
                                        </div> :
                                        <div key={chat.id}>
                                            <div>{chat.content}</div>
                                            <div>{chat.timestamp}</div>
                                        </div>
                                ))}
                            </div>
                            : <h3 className="text-center">Start Your Conversation</h3>}
                        <div className="row">
                            <input
                            ref={(ref) => this.mainInput= ref}
                            placeholder="type your message here" 
                            onChange={(e) => { this.setState({ msg: e.target.value }) }} 
                            className="col-10 border border-success"/>
                            <button className="col-2 btn btn-success border border-dark" onClick={this.sendMessage}>Send</button>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default ChatModal
