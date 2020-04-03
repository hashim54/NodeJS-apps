const sgMail = require ('@sendgrid/mail')
const sendgridAPIKey = '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'

 //sgMail.setApiKey(sendgridAPIKey)
 sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
            from: email,
            to: 'hashim54@gmail.com',
            subject:'Welcome to the app',
            text: `Welcome to the app, ${name}, Let me know how you get along with the app`
    })
}
const sendCancellationEmail = (email, name) => {
    sgMail.send({
            from: email,
            to: 'hashim54@gmail.com',
            subject:'Sorry to see you go',
            text: `Sorry that you are leaving, ${name}. Please do send us feedback`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}