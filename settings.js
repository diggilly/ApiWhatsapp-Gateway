const fs = require("fs");

// ============= GLOBAL SETTING ============ //
global.port = "5001"; // Port Api / Browser
global.countrycode = "KE"; // Country Code - https://countrycode.org/ (ISO CODES)
global.countrycodephone = "62"; // Country Phone - https://countrycode.org/ (COUNTRY CODE)
global.timezone = "Asia/Jakarta"; // Time Zone
global.usePairingNumber = true; // true = Pairing Code / false = QRCode
global.pairingNumber = "254751599663"; // whatsapp number used as a bot, for pairing number
//========================================================

global.pp_bot = fs.readFileSync("./image/logo.png"); // location and name of the logo
global.use_pp = true; // use a logo?

//========================================================

global.kontakadmin = ["254751599663"]; // admin whatsapp number
global.kirimkontak_admin = false; // true = automatically send admin contact

//========================================================

global.sessionName = "session"; // session name
//========================================================
