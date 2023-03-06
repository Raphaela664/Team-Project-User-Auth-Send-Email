let express = require('express');
let crypto = require('crypto');
let jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
let secretkey = "myguy";
let router = express.Router();
// In server.js
router.post('/sendmails',async (req,res)=>{
	let snd =  sendmail(req.body.emails,"hesh.teo@gmail.com",req.body.message);
	res.send(snd);
})
		
				 
			//========================================= FUNCTIONS ==========================================
function authenticateToken(token,callback){
	jwt.verify(token, secretkey, (err, decoded) => {
	  	let response;
		if (err) {
			response = {success: false, message: err.message};
		} else {
			response = {success : true,message: decoded};
		}
		 callback(response);
	});
}
function addToken(userInfo) {
  	const token = jwt.sign(userInfo, secretkey);
  	return token;
}

function sendmail(emails,from,message) {
	let d = 0;
  	emails.forEach(uemail => {
		console.log(uemail,message.body,message.subject)
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			auth: {
				user: "hesh.teo@gmail.com",
				pass: "uwzfszzfuluhdgsk"
			}
		});
		const mailOptions = {
			from: "hesh.teo@gmail.com",
			to: uemail,
			subject: message.subject,
			text: message.body
		};
		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
				d+=1
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
	});
	if (d != 0) {
		return {success : false, message: `${d} mails were not sent`}
	} else {
		return {success : true, message: `mails sent`}
	}
}
const generateUniqueId = () => {
   return crypto.randomBytes(9).toString('hex');
};
module.exports.router = router;