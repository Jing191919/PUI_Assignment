function check_button_status(){
	var textinputs = document.querySelectorAll('input[type=checkbox]'); 
	var all_checked = [].filter.call( textinputs, function( el ) {
	    return el.checked
	});

	console.log(all_checked.length);

	if (textinputs.length == all_checked.length) {
		//alert("All Checked!");
        document.querySelector(".finishing_button").style.background="#d8c4aa";
		return false;
	}
}
