// Function to fetch and display the list of elections function
fetchElections() {
 fetch('get_elections.php') .then(response => response.json()) .then(data => { const electionSelect = document.getElementById('election-select'); electionSelect.innerHTML = '<option value="">-- Select --</option>'; data.forEach(election => { const option = document.createElement('option'); option.value = election.id; option.textContent = election.name; electionSelect.appendChild(option);

});
 }).catch(error => { console.error('Error:', error); });
}
// Function to fetch and display the election results function
fetchResults(electionId) { fetch(`get_results.php?id=${electionId}`) .then(response => response.json()) .then(data => { const resultsContainer = document.getElementById('results-container'); resultsContainer.innerHTML = ''; data.forEach(result => { const div = document.createElement('div'); div.className = 'result'; div.innerHTML = ` <h3>${result.candidateName}</h3> <div class="candidate">Candidate ID: ${result.candidateId}</div> <div class="votes">Votes: ${result.votes}</div> `;resultsContainer.appendChild(div); }); }).catch(error => { console.error('Error:', error); }); }// Add event listener to the form submission document.getElementById('select-election-form').addEventListener('submit', function(event) { event.preventDefault(); var electionId = document.getElementById('election-select').value; if (electionId) { fetchResults(electionId); } }); // Fetch the list of elections when the page loads fetchElections();
<?php // Replace this code with your database connection and query logic
 // This is just a dummy data to simulate the list of elections
 $elections = [ ['id' => 1, 'name' => 'Election 1'],
  ['id' => 2, 'name' => 'Election 2'],
  ['id' => 3, 'name' => 'Election 3'] ];
  header('Content-Type: application/json');
  echo json_encode($elections); ?>
