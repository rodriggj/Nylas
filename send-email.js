const Nylas = require('nylas')
require('dotenv').config()

Nylas.config({
    clientId: process.env.CLIENT_ID, 
    clientSecret:process.env.CLIENT_SECRET
})

const nylas = Nylas.with(process.env.ACCESS_TOKEN)

const draft = nylas.drafts.build({
    subject: 'Foobar', 
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    to: [{
        name: "Gabe R.",
        email: "gabriel.rodriguez.ctr@gmail.com"
    }]
})

draft.send()
.then(message => {
    console.log(`Your message: ${message}`)
})