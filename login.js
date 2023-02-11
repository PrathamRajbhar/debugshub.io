// function Input_MobileNumber() {
//     let mobilenuber = document.getElementById('MobileNumber').value;
//     console.log(mobilenuber);
//     let OtpSection = document.getElementById('otp_section');
//     OtpSection.style.display = 'block';
//     let verifyButton = document.getElementById('verify_btn');
//     verifyButton.style.display = 'block';
//     let otpsendButton = document.getElementById('otp_send_button');
//     otpsendButton.style.display = 'none';
// }

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBq1YKhK3VBO1uWnGtQEs7y3ToDAYok9OA",
    authDomain: "fir-loginsystem-deb3a.firebaseapp.com",
    projectId: "fir-loginsystem-deb3a",
    storageBucket: "fir-loginsystem-deb3a.appspot.com",
    messagingSenderId: "717170429506",
    appId: "1:717170429506:web:0f40b68878ef2c2b80a7db"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    username = document.getElementById('username').value
    phone_number = document.getElementById('phone_number').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Enter Valid Email or Password')
        return
        // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(username) == false || validate_field(phone_number) == false) {
        alert('Enter Valid Email or Password')
        return
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                email: email,
                full_name: full_name,
                username: username,
                password: password,
                phone_number: phone_number,
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data)

            // DOne
            alert('User Created!!')
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}




// Set up our login function 
function login() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Enter Valid Email or Password')
        return
        // Don't continue running the code
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).update(user_data)

            // DOne

            let localuseremail = localStorage.setItem('email', email);
            alert('User Logged In!!')
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}







// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}