// 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
const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'atfoo@live.com.sg',
        subject:'Thanks for joining in!',
        text: `Welcome to the app ${name}. Let me know how the app is!`
    })
}

const sendCancelEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'atfoo@live.com.sg',
        subject:'Cancellation of account',
        text: `We are sorry to see you leave ${name}, please tell us how we could have done better.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}