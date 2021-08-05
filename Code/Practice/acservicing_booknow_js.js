function onFormSubmit(){
	var formData = readFormData();
	insertNewRecord(formData);

}

function readFormData(){
	var formData = {};
	formData["salary"] = document.getElementById("salary").value;
	formData["city"] = document.getElementById("city").value;
	return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.salary;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.city;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onDelete(this)"><i class="fa fa-remove"></a>`;
}

function onDelete(td){
	if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}