const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['94757558130'] //ur owner number
global.ownernomer = "94757558130" //ur owner number2
global.ownername = "Dark Angle" //ur owner name
global.ytname = "YT: Nane" //ur yt chanel name
global.socialm = "GitHub: Darkangle" //ur github or insta name
global.location = "SriLanka, Gampaha, Ganemulla" //ur location

//new
global.botname = "Zyren MD V1"
global.ownernumber = '94757558130'
global.ownername = '♾️ Darkangle'
global.ownerNumber = ["94757558130@s.whatsapp.net"]
global.ownerweb = "nane"
global.websitex = "nane"
global.wagc = "nane"
global.themeemoji = '🎆'
global.wm = "Zyren Bot Inc"
global.botscript = 'https://github.com/Darkanglesx/Zyren-MD' //script link
global.packname = "Sticker By"
global.author = "Zyren MD Bot\n\n\nA whatsapp bot developed by\n♾️ Dark Angle Tm\n\n\n\n\n\n\n\n--------______-------\n\n\n\n\n\n\n\nContact No. : +94757558130"
global.creator = "94757558130@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./Media/theme/zyren.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/theme/zyren.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/zyren.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/zyren.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by *admins* only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type *Rent*',
    owner: 'This feature could be used by *owner* only',
    group: 'Features Used Only For *Groups!*',
    private: 'Features Used Only For *Private* Chat!',
    bot: 'This feature could be used by *bot *only',
    wait: 'In process...Wait...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every *12 Hours*',
    nsfw: 'The nsfw feature has not been activated, please contact the *admin* to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})