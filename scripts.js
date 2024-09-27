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
    alert("Thank you for enrolling! We will contact you with more details.");
}
