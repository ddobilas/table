"use strict";

let add = document.querySelector("#add");
let table = document.querySelector("table");
let removeL = document.querySelector("#delL");
let removeF = document.querySelector("#delF");

let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let ageInput = document.querySelector("#age");

add.addEventListener("click", function () {
  let name = nameInput.value;
  let surname = surnameInput.value;
  let age = ageInput.value;

  if (
    nameInput.value === "" ||
    surnameInput.value === "" ||
    ageInput.value === "" ||
    ageInput.value <= 0
  ) {
    alert("Įveskite pilnus duomenis");
  } else {
    let tbody = document.querySelector("tbody");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    tbody.append(tr);
    tr.append(td1);
    td1.append(name);
    tr.append(td2);
    td2.append(surname);
    tr.append(td3);
    td3.append(age);
  }
  nameInput.value = "";
  surnameInput.value = "";
  ageInput.value = "";
});

removeL.addEventListener("click", function () {
  var tr = document.getElementsByTagName("tr");
  tr[tr.length - 1].remove();
});

removeF.addEventListener("click", function () {
  var tr = document.getElementsByTagName("tr");
  tr[1].remove();
});
