// JavaScript file for client-side interactions

function showTransferForm() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('transferSection').style.display = 'block';
    document.getElementById('adminSection').style.display = 'none';
}

function showAdminLoginForm() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('transferSection').style.display = 'none';
    document.getElementById('adminSection').style.display = 'block';
}

function submitName() {
    const name = document.getElementById('name').value;
    document.getElementById('greeting').innerHTML = `<h1>Hello, ${name}!</h1>`;
}

function transferMoney() {
    const amount = document.getElementById('amount').value;
    const to = document.getElementById('to').value;
    alert(`Transferred $${amount} to ${to}`);
    document.getElementById('amount').value = '';
    document.getElementById('to').value = '';
}

function loginAdmin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        alert('Admin logged in successfully');
    } else {
        alert('Incorrect credentials');
    }
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function fetchData() {
    const url = document.getElementById('url').value;
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('fetchResult').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('fetchResult').innerHTML = 'Error fetching URL';
        });
}
