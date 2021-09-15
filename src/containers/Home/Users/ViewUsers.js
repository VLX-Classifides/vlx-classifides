import axios from 'axios'
import React, { Component } from 'react'

export class ViewUsers extends Component {
    state=
    {
        id:"",
        users:[]
    }
    componentDidMount()
    {
        axios.get("http://localhost:8080/users").then(res=>{
            this.setState({users:res.data.results})
        }
        ).catch((err) => console.log(err));
    }
    viewUser(id) {
        this.props.history.push(`/userdetails/${id}`)
    }
    render() {
        if(this.state.users.length===0)
        {
            return(
                <div>
                    <h2 className="text-center">No Users found</h2>
                </div>)
        }
        return (
            <div>
                <br/><br/><br/>
                <h2 className="text-center">Users List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered text-center'>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Users Email</th>
                                <th>User Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                <button className='btn btn-info' onClick={() => this.viewUser(user.id)}>View User</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default ViewUsers
