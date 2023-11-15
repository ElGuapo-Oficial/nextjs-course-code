import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const data = req.body;
            const client = await MongoClient.connect("mongodb+srv://najash01:najash01@cluster0.jleqj.mongodb.net/Meetups?retryWrites=true&w=majority");
            const db = client.db();

            const meetupsCollection = db.collection('meetups');
            const result = await meetupsCollection.insertOne(data);
            client.close();

            res.status(201).json({ message: "Meetup Inserted! "})
        } catch(error) {
            console.log("Error on POST to DB: ", error);
            res.status(500).json({ message: "Error: Meetup NOT Inserted..."})
        }
    }
} 

export default handler;