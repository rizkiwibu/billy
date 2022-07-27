const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['083807661974']
global.premium = ['6285878836361']
global.youtube = 'https://youtube.com/channel/UC4nKoTls09OfD-GUTKt-6OA'
global.ownername = 'billzyyy'
global.botname ='BOT🤖 BILLZZYY '
global.donasi = {
    saweria: 'https://saweria.co/Rizkiwibu',
    nomor: '083807661974'
}
global.packname = 'BOT🤖 BILLZZYY '
global.author = 'BOT🤖 BILLZZYY '
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
