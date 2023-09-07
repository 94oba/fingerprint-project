// Function to fetch and display the list of elections
function fetchElections() {
    fetch('get elections.php')
        .then(response => response.json())
        .then(data => {
            const electionList = document.getElementById('election-list');
            electionList.innerHTML = '';

            data.forEach(election => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${election.name} - ${election.date}</span>
                <button class ="edit-election" data-id ="${election.id}">Edit</button>
                <button class="delete-election"data-id="${election.id}">Delete</button>`;
                electionList.appendChild(li);
            });
            const editButtons = document.getElementByClassName('edit-election');
            Array.from(editButtons).forEach(button =>{ button.addEventListener('click',
            function(){ const electionId= this.getAttribute('data-id');
            editElection(electionId);
            });
            });
            const deleteButtons = document.getElementByClassName('delete-election');
            Array.from(deleteButtons).forEach(button =>{ button.addEventListener('click',
            function(){ const electionId= this.getAttribute('data-id');
            deleteElection(electionId);
            });
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function to delete an election
function deleteElection(electionId) {
    if (confirm('Are you sure you want to delete this election?')) {
        fetch(`delete_election.php?id=${electionId}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    fetchElections(); // Refresh the election list
                } else {
                    console.error('Failed to delete election:', data.error);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}
function addElection(electionName){
fetch('add_election.php', {
method:'POST',
headers:{ 'Content-Type':'application/x-www-form-urlencoded'},
body:'name=${encodeURIComponent(electionName)}'
})
.then(response => response.json())
if (data.success){
fetchElections();
document.getElementById('election-name').value ='';
}else{
console.error('Error:', data.message);
}
})
.catch(error=>{
console.error('Error:', error);
});
}
function deleteElection(electionId){
fetch('delete_election.php', {
method:'POST',
headers:{ 'Content-Type':'application/x-www-form-urlencoded'},
body:'name=${encodeURIComponent(electionId)}'
})
.then(response => response.json())
if (data.success){
fetchElections();
}else{
console.error('Error:', data.message);
}
})
.catch(error=>{
console.error('Error:', error);
});
}
function editElection(electionId){
const newElectionName = prompt('Enter the new election name:');
if(newElectionName){
fetch('edit_election.php',{
method:'POST',
headers:{ 'Content-Type':'application/x-www-form-urlencoded'},
body:'name=${encodeURIComponent(electionId)}&name= ${encodeURIComponent(newElectionName)}'
})
.then(response => response.json())
if (data.success){
fetchElections();
document.getElementById('election-name').value ='';
}else{
console.error('Error:', data.message);
}
})
.catch(error=>{
console.error('Error:', error);
});
}
// Add event listener to the form submission
document.getElementById('add-election-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const electionName = document.getElementById('election-name').value;
    addElection(electionName);
});

// Fetch the list of elections when the page loads
fetchElections();