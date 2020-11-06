const sgMail = require('@sendgrid/mail');
// const sengridApiKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'thakkersmeet@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the Task Manager application, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'thakkersmeet@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Is there anything we could have done ${name} to keep you from leaving?`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}


// sgMail.send({
//     to: 'thakkersmeet@gmail.com',
//     from: 'thakkersmeet@gmail.com',
//     subject: 'This is my first creation',
//     text: "Sending emails using Twilio is fun!"
// })
