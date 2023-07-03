function addData() {
  var table = document.getElementById("dataTable");
  var addElement;
  var totalRowCount = 0;
  if (table) {
    totalRowCount = table.rows.length;
  }
  //to check if table is already there
  if (totalRowCount > 0) {
    // add data to existing table
    addElement = appendExisting();
  } else {
    // create new table
    addElement = createElement();
  }
  // append data to body
  document.body.appendChild(addElement);
  //clear form
  document.getElementById("form").reset();
}

function createElement() {
  //get form data

  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.querySelector('input[type="radio"]:checked').value;
  var food = [];
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    food.push(checkboxes[i].value);
  }
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var comments = document.getElementById("comments").value;
  console.log(
    firstName,
    lastName,
    address,
    pincode,
    gender,
    food,
    state,
    country,
    comments
  );

  //create new div
  var dataDiv = document.createElement("div");
  dataDiv.setAttribute("class", "container");
  dataDiv.setAttribute("id", "container2");

  // create heading
  var resHead = document.createElement("h2");
  resHead.setAttribute("id", "result");
  var text = "User Survey Data";
  resHead.innerText = text;

  //create new table
  var dataTable = document.createElement("table");
  dataTable.setAttribute("id", "dataTable");
  dataTable.setAttribute(
    "class",
    "table table-striped table-bordered table-hover table-responsive"
  );
  //create table
  var head = `<tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>Gender</th>
        <th>Food Choice</th>
        <th>State</th>
        <th>Country</th>
        <th>Comments</th>
    </tr>`;
  //add data to row
  var data = `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${food}</td>
        <td>${state}</td>
        <td>${country}</td>
        <td>${comments}</td>
    </tr>
  `;
  dataTable.innerHTML = head;
  dataTable.innerHTML += data;
  dataDiv.appendChild(resHead);
  dataDiv.appendChild(dataTable);
  return dataDiv;
}

function appendExisting() {
  //get form data
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.querySelector('input[type="radio"]:checked').value;
  var food = [];
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    food.push(checkboxes[i].value);
  }
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var comments = document.getElementById("comments").value;

  console.log(
    firstName,
    lastName,
    address,
    pincode,
    gender,
    food,
    state,
    country,
    comments
  );

  //add data to row
  var data = `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${food}</td>
        <td>${state}</td>
        <td>${country}</td>
        <td>${comments}</td>
    </tr>
  `;

  //get existing table
  var table = document.getElementById("dataTable");

  //add new row
  table.innerHTML += data;

  //copy table data to new variable
  var newTable = table;

  //remove existing div element
  document.getElementById("container2").remove();

  //create new div element
  var dataDiv = document.createElement("div");
  dataDiv.setAttribute("class", "container");
  dataDiv.setAttribute("id", "container2");

  //create heading
  var resHead = document.createElement("h2");
  resHead.setAttribute("id", "result");
  var text = "User Survey Data";
  resHead.innerText = text;

  //append data to div
  dataDiv.appendChild(resHead);
  dataDiv.appendChild(newTable);

  return dataDiv;
}
