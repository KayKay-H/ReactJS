document.getElementById('features').innerHTML = `
  <h2>Profile Page</h2>
  <button onclick="toggleProfile()">Toggle Profile</button>
  <div id="profile" style="display:none;">
    <p><strong>Name:</strong> Jordan Rivers</p>
    <p><strong>Role:</strong> Front-End Developer</p>
  </div>

  <h3>Feedback Form</h3>
  <form onsubmit="submitFeedback(event)">
    <input id="feedbackInput" type="text" placeholder="Your feedback..." />
    <button type="submit">Send</button>
  </form>
  <p id="feedbackMsg"></p>
`;

function toggleProfile() {
  const profile = document.getElementById('profile');
  profile.style.display = profile.style.display === 'none' ? 'block' : 'none';
}

function submitFeedback(e) {
  e.preventDefault();
  const val = document.getElementById('feedbackInput').value;
  const msg = document.getElementById('feedbackMsg');
  msg.textContent = val ? `Feedback received: ${val}` : 'Feedback cannot be empty!';
}
