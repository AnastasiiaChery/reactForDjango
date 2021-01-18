export class UserService {

  

	_url = 'http://localhost:8000/employee';

	getAllUsers() {
		return fetch(`${this._url}`).then(value => value.json());
	}

	

}