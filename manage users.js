function fetchUsers(){
fetch('get_users.php')
.then(response=> response.json())
.then(data=>{
const userList = document.getElementById('user-list');
userList.innerHTML ='';
data.forEach(user=> {
const li= document.createElement('li');
li.innerHMTL= '<span> ${user.username}</span>
<span class="privilege">${user.privileges'</span>
<button class='edit-user' data-id="${user.id}">Delete</button>
<button class='assign-privileges' data-id="${user.id}">assign privileges</button> ';
userList.appendChild(li);
});
const editButtons = document.getElementByClassName('edit-user');
Array.from(editButtons).forEach(button=>{
button.addEventListener('click',function(){
const userId =this.getAtrribute('data-id');
editUser(userId);
});
});
const deleteButtons= document.getElementByClassName('delete-user');
Array.from(deleteButtons).forEach(button=>{
button.addEventListener('click',function(){
const userId =this.getAtrribute('data-id');
deleteUser(userId);
});
});
const assignPrivilegeButtons= document.getElementByClassName('assign-privileges');
Array.from(assignPrivilegeButtons).forEach(button=>{
button.addEventListener('click',function(){
const userId =this.getAtrribute('data-id');
assignPrivilege(userId);
});
});
}
// Function to add a new user
function addUser(username, password, privileges) {
    fetch('add_user.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, privileges })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            fetchUsers(); // Refresh the user list
            document.getElementById('add-user-form').reset(); // Clear the form
        } else {
            alert(data.message);
        }
    });
}

// Function to delete a user
function deleteUser(userId) {
    fetch('delete_user.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            fetchUsers(); // Refresh the user list
        } else {
            alert(data.message);
        }
    });
}

// Function to edit a user
function editUser(userId) {
    // Implement the logic to edit a user based on the userId
    // You can use a form or prompt to get the new values for username, password, and privileges
    // Then make a POST request to the server to update the user information
    // Finally, refresh the user list
}

// Function to assign privileges to a user
function assignPrivileges(userId) {
    // Implement the logic to assign privileges to a user based on the userId
    // You can use a form or prompt to get the new value for privileges
    // Then make a POST request to the server to update the user's privileges
    // Finally, refresh the user list
}

// Event listener for the add user form submission
document.getElementById('add-user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const privileges = document.getElementById('privileges').value;
    addUser(username, password, privileges);
});

// Fetch and display the initial user list
fetchUsers();
}
}
})
}