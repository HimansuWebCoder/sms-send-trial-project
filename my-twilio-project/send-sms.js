const twilio = require("twilio");

// Replace these with your Twilio account SID and Auth Token
const accountSid = "ACaab4442c7fbba99ad9685de74a427aeb";
const authToken = "ce25c5ed18af16811cb5358595170223";
const client = new twilio(accountSid, authToken);

client.messages
    .create({
        body: "Hii, Himansu, You have a got a job offer from Twillio. Let's schedule a interview meeting on zoom, can you available now?",
        to: "+919861194145", // Replace with the recipient's phone number
        from: "+16267846105", // Replace with your Twilio phone number
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.error("Error sending message:", error));
