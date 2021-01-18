  
export default  function User(props) {

	let {id, name, salary} = props.item;

      
	return(
    <div>
		Id: {id}<br></br>
		Name: {name}<br></br>
		Salary: {salary} <br></br>
        <button  onClick={ () =>  {
             console.log(id)
             
           
        const response = fetch(`http://localhost:8000/employee/${id}`, {method: "DELETE"}).then(function(response) {
            
            return response.json();
          })
        }}>Delete</button>
		
		
		<hr></hr>
	</div>)
}
