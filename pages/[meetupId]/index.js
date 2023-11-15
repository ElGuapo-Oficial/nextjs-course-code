
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
    console.log("MeetupDetails: ", props);
    return (
        <MeetupDetail 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb+srv://najash01:najash01@cluster0.jleqj.mongodb.net/Meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    console.log("getStaticPaths", meetups);
    client.close();

    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() },
        }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect("mongodb+srv://najash01:najash01@cluster0.jleqj.mongodb.net/Meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    console.log("getStaticProps", selectedMeetup)
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        },
        revalidate: 10
    }
}

export default MeetupDetails;