const Mailgun = require('mailgun-js');
const template = require('../config/template');
const keys = require('../config/keys');

const { key, domain, sender } = keys.mailgun;

class MailgunService {
	init() {
		try {
			return new Mailgun({
				apiKey: key,
				domain: domain
			});
		} catch (error) {
			console.warn('Missing mailgun keys');
		}
	}
}

const mailgun = new MailgunService().init();

exports.sendEmail = async (type,name, email, message) => {
  try {
    const messages = prepareTemplate(type, name, email, message);
 
    const config = {
      from: `MyPortfolio! <${email}>`,
      to: sender,
      subject: messages.subject,
      text: messages.text,
    };

    return await mailgun.messages().send(config);
  } catch (error) {
    return error;
  }
};

const prepareTemplate = (type, name, email, message) => {
  let messages;

  switch (type) {
    case "contact":
      messages = template.contact(name, email, message);
      break;

    default:
      messages = "";
  }

  return messages;
};
