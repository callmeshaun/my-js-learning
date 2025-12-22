//DOM = Document Object Model

const username=""
const welcomemsg = document.getElementById("welcomemsg")

welcomemsg.textContent += username === "" ? `Guestr` : username