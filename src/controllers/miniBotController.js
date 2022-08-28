require("dotenv").config();

const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;
//console.log(MY_VERIFY_TOKEN)

let test = (req, res) => {
    return res.send("Hello again");
}

let getWebhook = (req, res) => {
    //Your verify token. Should be a random string.
    let VERIFY_TOKEN = MY_VERIFY_TOKEN;

    //Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    // Check if a token and mode is in the query string of the request
    if (mode && token) {
        // Check the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            // Respond with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            // Respond with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
}

let postWebhook = (req, res) => {
    if (body.object === "page") {
        //Iterates over each entry - there may be multiple if batched
        body.entry.array.forEach(function (entry) {
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);
        });
        // Returns a '200 OK' response to all requests
        res.status(200).send("EVENT_RECEIVED");

        // Determine which webhooks were triggered and get sender PSIDs and locale, message content and more.

    } else {
        // Return a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }
}

// Handles messages events
function handleMessage(sender_psid, received_message) {

}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {

}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
  
}

 module.exports = {
    test:test,
    getWebhook: getWebhook,
    postWebhook: postWebhook
 }