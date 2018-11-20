
function Button() {
	fetch('https://jsonplaceholder.typicode.com/todos/')
		.then(function(response, failure) {
			console.log(response);

			if(response.status !== 200) {
				alert("Looks like there was a problem. Status Code: "
					.response.status)
				return;
			}

			response.json().then(function(data) {
				console.log(data);
				const results = data.map(result =>

					<div class = "card">
					<div class = "card-body">

					</div>
					</div>

			);

				console.log(results)
				document.getElementById("crackle").innerHTML = results;

			});

		})


}