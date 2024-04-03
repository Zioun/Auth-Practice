# Project README

## Project Name: Auth Practice

## Project Description
This project is a simple web application that utilizes Firebase Authentication to handle user authentication. It consists of four pages: Home, About, Blog, and Contact Us. Users are required to log in using Google authentication to access the Contact Us page. If a user is not logged in, they won't be able to visit the Contact Us page.

## Setting Up Firebase Authentication
1. Sign in to the Firebase Console (https://console.firebase.google.com/).
2. Create a new Firebase project or select an existing one.
3. Navigate to the Authentication section and enable the sign-in method for Google.
4. Make sure to add your project's configuration details to the JavaScript file where Firebase will be initialized.

## Project Structure
- `index.html`: The main HTML file containing the structure of the web pages.
- `styles.css`: CSS file for styling the web pages.
- `script.js`: JavaScript file to handle Firebase authentication and page navigation.

## How to Use
1. Clone this repository to your local machine.
2. Open `index.html` in a web browser to view the application.
3. You will be directed to the Home page.
4. Click on the About, Blog, or Contact Us links to navigate between pages.
5. To access the Contact Us page, you need to log in using your Google account.
6. Once logged in, you can freely navigate to all pages including the Contact Us page.
7. If you're not logged in, attempting to visit the Contact Us page will redirect you to the login page.

## Note
- Ensure that Firebase SDK is properly included in the project and initialized with your Firebase project credentials.
- Make sure your Firebase project's authentication settings allow Google authentication.

## References
- Firebase Documentation: [https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)
- Firebase Authentication Guide: [https://firebase.google.com/docs/auth](https://firebase.google.com/docs/auth)
