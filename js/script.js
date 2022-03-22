window.onload = function() {
    var $ = (id) => document.getElementById(id)
    let empForm = $('empForm')
    let digit8 = $('digit8')
    let username = $('username')
    let digit4 = $('digit4')
    let emailID = $('emailID')
    let deptSelection = $('deptSelection')
    empForm.addEventListener('submit', (e) => {
        digit8 = parseInt(digit8.value)
        username = String(username.value)
        digit4 = parseInt(digit4.value)
        emailID = String(emailID.value)
        deptSelection = String(deptSelection.value)
        console.log(`ID: ${digit8} \nName: ${username} \nExtension: ${digit4} \nEmail: ${emailID} \nDepartment: ${deptSelection}`)
        e.preventDefault()})
}