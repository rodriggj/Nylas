# Nylas Assignment

## Process
1. First We Need to Authenticate our Account to a Nylas App
    - [ ] From Nylas splash page nav to the _Nylas Account_
    - [ ] Click _Auth Account_

1a. This takes to Nylas `Hosted Auth Service` which prompts you to login with your email account. 

1b. An Access Token will be provided at the end of this registration process.

1c. Will will also need the `Client ID` and `Client Secret` found in the Dashboard. 

2. Install the Nylas Node SDK

2a. From a Terminal window execute the following command: 

```s
npm i nylas
```

2b. To see some relevant info about the SDK run: 
```s
npm info nylas
```

> You can also view th Nylas SDK Readme file [here](https://github.com/nylas/nylas-nodejs#readme)

3. Send an email 

3a. Create a file to house email configuration 

```s
touch send-email.js || code send-email.js
```

3b. Input the following to import the Nylas module

```js
const Nylas = require('nylas')
```

3c. Call the Nylas config object to pass your `client id` and `client secret` creds captured in the App Registration process. 

```js
const Nylas = require('nylas')
Nylas.config({
    clientId: process.env.CLIENT_ID, 
    clientSecret:process.env.CLIENT_SECRET
})
```

3d. Finally connect to Nylas by utilizing your Authorization Token. 

```js
const Nylas = require('nylas')
Nylas.config({
    clientId: process.env.CLIENT_ID, 
    clientSecret:process.env.CLIENT_SECRET
})

const nylas = Nylas.with(process.env.ACCESS_TOKEN)
```

3e. Now you can use the `nylas` Object to send a draft message: 

```js
const Nylas = require('nylas')
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
```