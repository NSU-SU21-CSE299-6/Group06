function onFormSubmit(){
	var formData = readFormData();
	insertNewRecord(formData);

}

function onFormSubmit1(){
    var formData = readFormData();
    insertNewRecord1(formData);

}

function onFormSubmit2(){
    var formData = readFormData();
    insertNewRecord2(formData);

}

function onFormSubmit3(){
    var formData = readFormData();
    insertNewRecord3(formData);

}

function readFormData(){
	var formData = {};
	formData["acbasic"] = document.getElementById("acbasic").value;
	formData["qnt"] = document.getElementById("qnt").value;
    formData["acbasictotal"] = document.getElementById("acbasictotal").value;

    formData["acmaster"] = document.getElementById("acmaster").value;
    formData["qnt1"] = document.getElementById("qnt1").value;
    formData["acmastertotal"] = document.getElementById("acmastertotal").value;

    formData["acwater"] = document.getElementById("acwater").value;
    formData["qnt2"] = document.getElementById("qnt2").value;
    formData["acwatertotal"] = document.getElementById("acwatertotal").value;

    formData["acjet"] = document.getElementById("acjet").value;
    formData["qnt3"] = document.getElementById("qnt3").value;
    formData["acjettotal"] = document.getElementById("acjettotal").value;
	return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.acbasic;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.qnt;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.acbasictotal;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onDelete(this)"><i class="fa fa-remove"></a>`;
}

function insertNewRecord1(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.acmaster;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.qnt1;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.acmastertotal;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onDelete(this)"><i class="fa fa-remove"></a>`;
}

function insertNewRecord2(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.acwater;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.qnt2;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.acwatertotal;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onDelete(this)"><i class="fa fa-remove"></a>`;
}
function insertNewRecord3(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.acjet;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.qnt3;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.acjettotal;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onDelete(this)"><i class="fa fa-remove"></a>`;
}

function onDelete(td){
	if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function mult(value){
    var x;
    x=1000 * value;
    document.getElementById('acbasictotal').value = x;
}

function mult1(value){
    var y;
    y=2000 * value;
    document.getElementById('acmastertotal').value = y;
}

function mult2(value){
    var z;
    z=1100 * value;
    document.getElementById('acwatertotal').value = z;
}

function mult3(value){
    var a;
    a=2100 * value;
    document.getElementById('acjettotal').value = a;
}