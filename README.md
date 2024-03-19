# Test-App

# Vulnerable Website

This is a vulnerable website demonstrating several security vulnerabilities including XSS, CSRF, BAC, and SSRF.

## How to Run

1. Clone this repository to your local machine.
2. Navigate to the directory containing the repository.
3. Install the dependencies by running `npm install`.
4. Start the server by running `node server.js`.
5. Visit `http://localhost:3000` in your web browser to access the website.

## Vulnerabilities

- **XSS (Cross-Site Scripting)**: The website allows the execution of arbitrary JavaScript code in the context of other users' browsers.
- **CSRF (Cross-Site Request Forgery)**: The website doesn't implement CSRF tokens to prevent unauthorized actions.
- **BAC (Backdoor Access Control)**: The website has a backdoor allowing access to admin features without proper authentication.
- **SSRF (Server-Side Request Forgery)**: The website allows fetching data from arbitrary URLs, which can be exploited for SSRF attacks.

## Disclaimer

This website is intentionally vulnerable and should only be used for educational purposes. Do not deploy it in a production environment.

