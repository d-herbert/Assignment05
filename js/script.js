let empForm =  document.getElementById('empForm')
let digit8 = document.getElementById('digit8')
let username = document.getElementById('username')
let digit4 = document.getElementById('digit4')
let emailID = document.getElementById('emailID')
let deptSelection = document.getElementById('deptSelection')

empForm.addEventListener('submit', (e) => {
    digit8 = parseInt(digit8.value)
    username = String(username.value)
    digit4 = parseInt(digit4.value)
    emailID = String(emailID.value)
    deptSelection = String(deptSelection.value)
    console.log(`ID: ${digit8} \nName: ${username} \nExtension: ${digit4} \nEmail: ${emailID} \nDepartment: ${deptSelection}`)
    e.preventDefault()})

