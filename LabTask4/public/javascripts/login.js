	function promptalert(){
		var username = document.getElementById("username1");
		var password = document.getElementById("password1");
		if(username.value.trim() == "ahmad" && password.value.trim() == "1234" ){
			console.log("Succesfull!")
			alert("Login Successfully!");
		}
		else{
			alert("Login Failed!");
			confirm("Please Check Again!");
			console.log("Succesfull!")
		}
	}


	// // function handleSubmit(){
	// // 	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	// // 	  var input = document.getElementById("floatingInput");
	// // 	  var input1 = document.getElementById('floatingPassword')
	// // 	  if (input.value && input.value.match(validRegex)) {
	// // 		  console.log('email is: ',input.value)
	// // 		  input.innerText('')
	// // 		  input.classList.remove("error");
	// // 		  input.classList.add("success");
	// // 		} else {
	// // 		  input.classList.remove("success");
	// // 		  input.classList.add("error");
	// // 		}
			
	// // 		if (input1.value && input1.value.length>=6) {
	// // 		  input1.classList.remove("error");
	// // 		  input1.classList.add("success");
	// // 		} else {
	// // 		  input1.classList.remove("success");
	// // 		  input1.classList.add("error");
	// // 		}
	//   }
