Moralis.initialize('m20PA3clspCzNMiWXM5okTJK6gUbHgxPya6UFVmt'); // Application id from moralis.io
Moralis.serverURL = 'https://rhdnu7cf8pia.moralis.io:2053/server'; //Server url from moralis.io

async function login() {
  try {
    user = await Moralis.Web3.authenticate();
    console.log(user);
    alert('User logged in');
  } catch (error) {
    console.log(error);
  }
}

document.getElementById('login_button').onclick = login;
