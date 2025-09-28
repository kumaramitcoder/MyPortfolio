module.exports = {
	app: {
		name: 'Shubham Kumar Maddheshiya',
		apiURL: process.env.BASE_API_URL,
		clientURL: process.env.CLIENT_URL,
		adminURL: process.env.ADMIN_URL
	},
	port: process.env.PORT || 5000,
	
	
	mailgun: {
		key: process.env.MAILGUN_KEY,
		domain: process.env.MAILGUN_DOMAIN,
		sender: process.env.MAILGUN_EMAIL_SENDER
	},
	

};
