

exports.contact = (name, email, message) => {
  const messages = {
    subject: "Requiest from my Portfolio",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  return messages;
};


