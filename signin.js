// signup.js
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, addDoc, collection } from "./config.js";

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get user input values
    const emailValue = email.value;
    const passwordValue = password.value;
    window.location.href = 'dashboard.html';


    try {
        // Sign in the user with email and password
        const userCredential = await signInWithEmailAndPassword(auth, emailValue, passwordValue);
        const user = userCredential.user;

        // Redirect to the dashboard or perform additional actions as needed
        window.location = 'index.html';
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        // Use SweetAlert to display an error message
        swal("Error", errorMessage, "error");
    }
});
