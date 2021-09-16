import axios from 'axios'
import React, { Component } from 'react'
import api from "../../../routes/api"
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";
import $ from "jquery";
export class ViewUsers extends Component {
    state=
    {
        user: JSON.parse(localStorage.getItem("user")),
        id:"",
        users:[]
    }
    componentDidMount()
    {
        axios.get(api.developmentServer+"/users").then(res=>{
            this.setState({users:res.data.results})
        }
        ).catch((err) => console.log(err));
    }
    componentWillMount()
    {
        if (this.state.user) {
      this.props.authenticate();
    }
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
                {(this.state.user && this.state.user.role==="admin")?
                <div>
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
                </div>:
                <div><br/><br/><br/>
                <h2 className="text-center">You are not authorised</h2>
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.user.authUser,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    authenticate: () =>
      dispatch({ type: actionTypes.AUTHENTICATE, data: true }),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(ViewUsers);
