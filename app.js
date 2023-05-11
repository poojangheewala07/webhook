const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json());

// Handle incoming webhook notifications
app.post('/webhook', (req, res) => {
    const { action, model } = req.body;
    console.log('Webhook received:', action, model);

    // Process the webhook event here
    // Process the webhook event here
    app.post('/webhook', (req, res) => {
        const eventData = req.body; // Assuming the received data is in JSON format

        // Accessing the details of the event
        const eventID = eventData.id;
        const eventAction = eventData.action;
        const eventPayload = eventData.payload;

        // Perform actions based on the received data
        if (eventAction === 'created') {
            // Do something when a new event is created
            console.log(`New event created with ID: ${eventID}`);
            console.log('Event payload:', eventPayload);
            // Perform additional actions...
        } else if (eventAction === 'updated') {
            // Do something when an event is updated
            console.log(`Event with ID ${eventID} has been updated`);
            console.log('Updated payload:', eventPayload);
            // Perform additional actions...
        } else {
            // Handle other event actions or unknown events
            console.log(`Received unknown event action: ${eventAction}`);
        }

        // Send a response to acknowledge the receipt of the webhook event
        res.status(200).send('Webhook event received');
    });

    // You can perform any desired actions based on the received data

    res.sendStatus(200);
});

// Start the server
app.listen(3000, () => {
    console.log('Webhook server is running on port 3000');
});
