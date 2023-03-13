// Global Variables
let employeeId;
let employeeName;
let employeeExt;
let employeeEmail;
let employeeDepartment;

// Helper Function To Return DOM Element
function $(id) {
  return document.getElementById(id);
}

// Event Listener
window.addEventListener("load", function () {
  const empForm = $("empForm");
  empForm.addEventListener("submit", function (e) {
    e.preventDefault();

    employeeId = $("id").value;
    employeeName = $("name").value;
    employeeExt = $("ext").value
    employeeEmail = $("email").value;
    employeeDepartment = $("department").value;

    console.log(`ID: ${employeeId}`);
    console.log(`Name: ${employeeName}`);
    console.log(`Extension: ${employeeExt}`);
    console.log(`Email: ${employeeEmail}`);
    console.log(`Department: ${employeeDepartment}`);
  });
});