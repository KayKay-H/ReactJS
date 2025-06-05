document.getElementById('conditional').innerHTML = `
  <h2>Status Toggle</h2>
  <button onclick="toggleStatus()">Change Status</button>
  <p id="statusText">You are currently: Online</p>
`;

let isOnline = true;

function toggleStatus() {
  isOnline = !isOnline;
  document.getElementById('statusText').textContent = 
    "You are currently: " + (isOnline ? "Online" : "Offline");
}
