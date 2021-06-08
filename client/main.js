Moralis.initialize('m20PA3clspCzNMiWXM5okTJK6gUbHgxPya6UFVmt'); // Application id from moralis.io
Moralis.serverURL = 'https://rhdnu7cf8pia.moralis.io:2053/server'; //Server url from moralis.io

async function init() {
  try {
    let user = Moralis.User.current();
    if (!user) {
      $('login_button').click(async () => {
        user = await Moralis.Web3.authenticate();
      });
    }
    renderGame();
  } catch (error) {
    console.log(error);
  }
}

function renderGame() {
  $('#game').show();
  $('#login_button').hide();
}

init();
