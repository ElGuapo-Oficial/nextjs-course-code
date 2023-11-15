import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A First Meetup',
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//         address: "Some Address 1",
//         description: "This is the first meetup"
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//         address: "Some Address 2",
//         description: "This is the second meetup"
//     },
// ];

const HomePage = (props) => { 
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="React Meetups Description" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
}

export async function getStaticProps() {
    const client = await MongoClient.connect("mongodb+srv://najash01:najash01@cluster0.jleqj.mongodb.net/Meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10
    }
}

export default HomePage;


// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props : {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }