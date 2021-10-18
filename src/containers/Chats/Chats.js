import axios from 'axios';
import React, { Component } from 'react'
import api from '../../routes/api';

export class Chats extends Component {
    state = {
        user: JSON.parse(localStorage.getItem("user")),
        chatList: [],
        anotherPerson:[],
        allChats:[],
        msg:"",
    }
    sendMessage =()=>{
        if(this.state.msg==="")
        {

        }
        else{
        const body={
           sender:this.state.user.id,
           receiver:this.state.anotherPerson.userid,
           content:this.state.msg, 
        }
        this.setState({msg:""})
        axios.post(api.developmentServer+"/chat/send-message",body, {
            headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
        }).then(res=>{
            if(res.data.responseType===true)
            {
                this.getChats();
                this.getChatList();
                this.mainInput.value = "";
            }
        }).catch(err=>console.log(err))
    }
    }
    getChatList=()=>{
        axios.get(api.developmentServer + "/chat/list/" + this.state.user.id, {
            headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
        }).then(res => {
            if (res.data.responseType === true) {
                console.log(res.data.results);
                this.setState({ chatList: res.data.results })
            }
        })
    }
    getChats()
    {
        const body = {
            id1: this.state.user.id,
            id2: this.state.anotherPerson.userid,
        }
        axios.post(api.developmentServer + "/chat/get-all-chat", body, {
            headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
        }).then(
            (res) => {
                if (res.data.responseType) {
                    this.setState({ allChats: res.data.results })
                    console.log(this.state.allChats)
                }
            }
        ).catch(err => {
            console.log(err)
        })
    }
    componentDidUpdate(pP,pS,sS)
    {
        if(pS.allChats!==this.state.allChats)
        {
            this.getChats();
        }
        if(pS.chatList!==this.state.chatList)
        {
            this.getChatList();
        }
    }
    componentWillMount() {
        if (!this.state.user) {
            this.props.history.replace("/login");
        } else {
            this.getChatList();
        }
    }
    render() {
        return (
            <div>
                {(this.state.user) && (this.state.chatList.length > 0) ?
                    <div className="row">
                        <div className="col-4 mt-4">
                            <br /><br />
                            {this.state.chatList.map((chat,index)=>(
                                <div key={chat.id}>
                                    <div className="bg-secondary btn">
                                        <button className="btn" onClick={()=>this.setState({anotherPerson:this.state.chatList[index]},
                                            this.getChats)}>{chat.name}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-8 bg-success">
                            <br /><br /><br/>
                            <p>{this.state.anotherPerson.name}</p>
                            {this.state.allChats.length>0?
                            <div>
                                {this.state.allChats.map(chats=>(
                                    <div key={chats.id}>
                                        <p>{chats.content}</p>
                                        <p>{chats.timestamp}</p>
                                    </div>
                                ))}
                                <div className="row">
                            <input
                            ref={(ref) => this.mainInput= ref}
                            placeholder="type your message here" 
                            onChange={(e) => { this.setState({ msg: e.target.value }) }} 
                            className="col-10 border border-success"/>
                            <button className="col-2 btn btn-success border border-dark" onClick={this.sendMessage}>Send</button>
                        </div>
                            </div>:
                            <div className="text-center">
                        <br /><br /><br />
                        <h3>Tap on the name in list to start chat</h3>
                    </div>}
                        </div>
                    </div> :
                    <div className="text-center">
                        <br /><br /><br />
                        <h3>You haven't Started any conversation yet</h3>
                    </div>
                }
            </div>
        )
    }
}

export default Chats
