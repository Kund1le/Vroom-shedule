//Переменные
const addEmployeeButton = document.querySelector('.add-employee_button');
const employeeList = document.querySelector('.employee-list');
const employeeName = document.querySelector('.add-employee_name');
const employeePosition = document.querySelector('.add-employee_position');

//Добавление нового сотрудника
function addEmployee(nameValue, posValue) {
  const employeeTemplate = document.querySelector('.employee-list_template').content;
  const employeeElement = employeeTemplate.cloneNode(true);

  employeeElement.querySelector('.employee-list_item-name').textContent = nameValue;
  employeeElement.querySelector('.employee-list_item-position').textContent = posValue;

  employeeList.append(employeeElement);
}

addEmployeeButton.addEventListener('click', function() {
  addEmployee(employeeName.value, employeePosition.value);
  employeeName = '';
  employeePosition = '';
});

console.log(document.forms.add)