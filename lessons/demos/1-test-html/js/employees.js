function showHideSalary() {
    const elements = document.getElementsByClassName('salary');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('hideSalary');
    }

    // change button text
    const showHideButton = document.getElementById('showHideSalary');
    const hiddenSalaries = document.getElementsByClassName('hideSalary');    
    showHideButton.innerText = hiddenSalaries.length ? 'Show Salary' :'Hide Salary';
}