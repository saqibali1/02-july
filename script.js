function userBalance(){
	let userBalance = document.querySelector("#userBalance").value
	let callBalance = 10;
	let minBalance = 1;

	if (userBalance >=  callBalance){
		alert("Ring Ring")
	} else if(userBalance < callBalance && userBalance > minBalance){
		alert("your balance is going to finish")
	} else {
		alert("you haven't suffcent balance to make call")
	}
}