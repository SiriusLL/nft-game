Moralis.initialize('m20PA3clspCzNMiWXM5okTJK6gUbHgxPya6UFVmt'); // Application id from moralis.io
Moralis.serverURL = 'https://rhdnu7cf8pia.moralis.io:2053/server'; //Server url from moralis.io
const CONTRACT_ADDRESS = '0x893f309e7C0c784438bA1f320d4Dc6bFe1636240';

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

async function renderGame() {
  $('#login_button').hide();
  //Get and Render properties from SC
  let petId = 0;
  window.web3 = await Moralis.Web3.enable();
  let abi = await getAbi();
  let contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
  let data = await contract.methods
    .getTokenDetails(petId)
    .call({ from: ethereum.selectedAddress });
  console.log('data', data);
  $('#game').show();
}

function getAbi() {
  return new Promise((res) => {
    $.getJSON('Token.json', (json) => {
      res(json.abi);
    });
  });
}

init();
