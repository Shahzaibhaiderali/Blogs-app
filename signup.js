// signup.js
import { auth, createUserWithEmailAndPassword, addDoc, collection } from "./config.js";

const form = document.querySelector('#form');
const firstname = document.querySelector('#firstName');
const lastname = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repeatpassword = document.querySelector('#repeatPassword');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get user input values
    const firstNameValue = firstname.value;
    const lastNameValue = lastname.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    try {
        // Create the user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
        const user = userCredential.user;

        // Add additional information to Firestore
        await addDoc(collection(db, 'users'), {
            userId: user.uid,
            firstName: firstNameValue,
            lastName: lastNameValue,
            email: emailValue
        });

        console.log('User registered successfully:', user);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    }
});
