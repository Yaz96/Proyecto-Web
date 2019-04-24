function displaySportList(data){
	console.log(data);
	
}
fucntion onload(){
	let url = "./sports/api/list-sports";
let settings = {
	method : "GET",
	headers :{
		'Content-Type': 'application/json'
	}
};
	fetch(url,settings)
	.then(response => {
		if(status.ok){
			return response.json();
		}
		throw new Error(response.statusText)
	})
	.then(responseJSON => {
		displaySportList(responseJSON);
	});


}

$(onload);