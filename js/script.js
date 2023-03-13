// Global Variables
let employeeId, employeeName, employeeExt, employeeEmail, employeeDepartment;

// Helper Function To Return DOM Element
const $ = (id) => document.getElementById(id);

// Event Listener
window.addEventListener("load", () => {
    const empForm = $("empForm");
    empForm.addEventListener("submit", (e) => {
        e.preventDefault();

        employeeId = $("id").value;
        employeeName = $("name").value;
        employeeExt = $("ext").value
        employeeEmail = $("email").value;
        employeeDepartment = $("department").value;

        console.log(`ID: ${employeeId}\nName: ${employeeName}\nExtension: ${employeeExt}\nEmail: ${employeeEmail}\nDepartment: ${employeeDepartment}`);
    });
});