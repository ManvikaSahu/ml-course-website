document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-response').innerText = "Thank you, " + name + ". We will get back to you soon!";
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-response').innerText = "Please fill in all fields.";
    }
});
function enroll() {
  // Push custom data to the dataLayer when the button is clicked
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'courseEnrolled',            // Custom event name
    'courseName': 'Machine Learning Basics',  // Custom course name
    'userID': '12345',                    // Example user ID, replace with dynamic ID if available
    'courseLevel': 'Beginner'             // Additional information (optional)
  });

  // You can also display a message or trigger an action after the button is clicked
  alert("Thank you for enrolling in the Machine Learning Basics course!");
}


