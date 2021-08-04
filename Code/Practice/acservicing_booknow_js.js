function onFormSubmit(){
	var formData = readFormData();
	insertNewRecord(formData);

}

function readFormData(){
	var formData = {};
	formData["acbasic"] = document.getElementById("acbasic").value;
	formData["qnt"] = document.getElementById("qnt").value;
	return formData;
}

function insertNewRecord(data){
	var table = document.getElementById("alldatas").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.acbasic;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.qnt;
	cell3.innerHTML = '<a>Delete</a>';
}