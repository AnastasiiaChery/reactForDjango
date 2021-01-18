import React, {Component} from 'react';
import {UserService} from '../services/Servise';

import User from './User';
import Form from './Form';
import Change from './Change'


class Users extends Component {

	_userService = new UserService;

  state={users: []};


componentDidMount(){
 this._userService.getAllUsers().then(value =>{
 this.setState({users: value})
 });
}


	render() {
		return (
			<div>
                 {
					this.state.users.map(value => (<User
						 item={value}
                         key={value.id}/>))
                        
				 }
               <Form/>
               <Change/>
			</div>
		);
	}
	
}

export default Users;