import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state={name:'', salary:'' };
    
    }
  
    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
      
    }
  
    handleSubmit = (event) => {
        console.log(JSON.stringify(this.state))
  
      fetch('http://localhost:8000/employee', {
          method: 'POST',
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then(function(response) {
          console.log(response)
          return response.json();
        });
  
      event.preventDefault();
  }
  
    render() {
      return (
         
        <form onSubmit={this.handleSubmit}>
             <hr></hr>
            Добавить пользователя:
            <br></br>
          <label>
            Name:
            <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
            Salary:
            <input type="number" value={this.state.value} name="salary" onChange={this.handleChange} />
          </label>
           <input type="submit" value="Submit" />
          
           <hr></hr>
        </form>
        
      );
    }
}

export default Form; 