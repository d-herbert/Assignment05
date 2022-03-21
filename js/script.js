// global variables
let empForm
let output
let returnVals

// helper functions
// const $ = (id) => {
//     document.getElementById(id)
// }

// DOM elements
let submitForm = document.getElementById('submitForm')
let digit8 = document.getElementById('digit8')
let username = document.getElementById('username')
let digit4 = document.getElementById('digit4')
let emailID = document.getElementById('emailID')
let deptSelection = document.getElementById('deptSelection')

// function
function outputResults(digit8, username, digit4, emailID, deptSelection) {
    returnVals = `ID: ${digit8} \nName: ${username} \nExtension: ${digit4} \nEmail: ${emailID} \nDepartment: ${deptSelection}`
    
    return returnVals
}

submitForm.addEventListener('click', (e) => {
    digit8 = parseInt(digit8.value)
    username = String(username.value)
    digit4 = parseInt(digit4.value)
    emailID = String(emailID.value)
    deptSelection = String(deptSelection.value)

    // console.log(returnVals(digit8, username))
    console.log(outputResults(digit8, username, digit4, emailID, deptSelection))
    e.preventDefault()
})

