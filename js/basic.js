const submitButton = document.getElementById("submit-data")
const emptyButton = document.getElementById("empty-table")

let tableBody = document.getElementById("tableBody")
let newUsername = document.getElementById("input-username")
let newEmail = document.getElementById("input-email")
let newAddress = document.getElementById("input-address")
let adminCB = document.getElementById("input-admin")

userEditVerification = 0

let users = []

submitButton.addEventListener("click", () => {

    users.forEach(user => {
        if (user.username == newUsername.value) {
            user.email = newEmail.value
            user.address = newAddress.value
            user.admin = adminCB.checked
            userEditVerification = 1
        }
    });

    if (userEditVerification == 0) {
        users.push({username: newUsername.value, email: newEmail.value, address: newAddress.value, admin: adminCB.checked})
    } 
    updateTable(users)

    // newUsername.value = ""
    // newEmail.value = ""
    // newAddress.value = ""
    // adminCB.checked = false
})

emptyButton.addEventListener("click", () => {
    emptyTable()
    while(users.length > 0) {
        users.pop()
    }
})

function updateTable(users) {
    emptyTable()
    users.forEach(user => {
        let tableRow = document.createElement("tr")
        let tableColumn1 = document.createElement("td")
        tableColumn1.innerText = user.username
        let tableColumn2 = document.createElement("td")
        tableColumn2.innerText = user.email
        let tableColumn3 = document.createElement("td")
        tableColumn3.innerText = user.address
        let tableColumn4 = document.createElement("td")
        if (user.admin == true)    {
            tableColumn4.innerText = "X"
        } else  {
            tableColumn4.innerText = "-"
        }

        tableRow.appendChild(tableColumn1)
        tableRow.appendChild(tableColumn2)
        tableRow.appendChild(tableColumn3)
        tableRow.appendChild(tableColumn4)
        tableBody.appendChild(tableRow)

        userEditVerification = 0
    });
}

function emptyTable()   {
    while(tableBody.hasChildNodes())  {
        tableBody.removeChild(tableBody.firstChild)
    }
    
}

