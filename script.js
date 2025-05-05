// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Dynamically create the contact form section with id "contact-form"
    let formSection = document.createElement("section");
    formSection.setAttribute("id", "contact-form");
    formSection.innerHTML = `
        <h2>Contact Form</h2>
        <form id="userForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
  
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required><br><br>
  
            <label for="gender">Gender:</label>
            <select id="gender" name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select><br><br>
  
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
  
            <button type="submit">Submit</button>
        </form>
    `;
  
    // Locate the div element with id "fruit-container" and insert the form section after it
    const fruitContainer = document.getElementById("fruit-container");
    if (fruitContainer) {
      fruitContainer.insertAdjacentElement("afterend", formSection);
    } else {
      console.error("The element with id 'fruit-container' was not found.");
    }
  
    // Add event listener for form submission
    document.getElementById("userForm").addEventListener("submit", function (event) {
      event.preventDefault();
      alert(`Hello, ${document.getElementById("name").value}! Your form has been submitted.`);
      // Add a class to trigger the submission animation
      formSection.classList.add("submitted");
  
      // Optional: Remove the animation class and reset the form after 2 seconds
      setTimeout(function () {
        formSection.classList.remove("submitted");
        document.getElementById("userForm").reset();
      }, 2000);
    });
  });

