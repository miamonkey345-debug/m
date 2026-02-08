'use strict';

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Display data (you can handle it as needed)
    console.log('Form Submitted:', data);

    // Provide feedback to the user
    alert('Form submitted successfully!');
}

// Add event listener to the form
const form = document.getElementById('myForm'); // Make sure to set the form ID in your HTML
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}