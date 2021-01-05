var checkField = document.querySelector("input[name=accept]");
var titleField = document.querySelector("input[name=title]");
var descriptionField = document.querySelector("textarea");
var formSubmit = document.getElementById("mainForm");

descriptionField.value = "";

formSubmit.addEventListener('submit', function (event){
	var required_flag = 0;

	if(titleField.value.length == 0){
		titleField.parentNode.style.backgroundColor = "red";
		titleField.style.backgroundColor = "red";
		required_flag += 1;
	}
	if(descriptionField.value.length == 0) {
		descriptionField.parentNode.style.backgroundColor = "red";
		descriptionField.style.backgroundColor = "red";
		required_flag += 1;
	}
	if(checkField.checked == false) {
		checkField.parentNode.style.backgroundColor = "red";
		checkField.style.backgroundColor = "red";
		required_flag += 1;
	}
	if(required_flag != 0){
		event.preventDefault();
	}
});

document.querySelectorAll('.required').forEach(item => {
	item.addEventListener('change', event => {
		item.parentNode.style.backgroundColor = "transparent";
		item.style.backgroundColor = "transparent";
	});
});
