// Variables to hold subscriber data
let subscribers = [];

// Function to add a subscriber
function addSubscriber(name, email) {
  subscribers.push({ name, email }); // Add subscriber to the array
  updateSubscriberList(); // Update the list displayed
}

// Function to update the subscriber list in the DOM
function updateSubscriberList() {
  const list = document.getElementById('subscriber-list');
  list.innerHTML = ''; // Clear the current list

  // Loop through subscribers and display them
  subscribers.forEach((subscriber, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${subscriber.name} (${subscriber.email})`;

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click', () => {
      removeSubscriber(index);
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
  });
}

// Function to remove a subscriber
function removeSubscriber(index) {
  subscribers.splice(index, 1); // Remove from the array
  updateSubscriberList(); // Update the displayed list
}

// Event listener for form submission
document.getElementById('subscribe-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  // Regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (name === '' || !emailRegex.test(email)) {
    alert('Please provide a valid name and email.');
    return;
  }

  // Add the subscriber
  addSubscriber(name, email);

  // Clear form inputs
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
});
