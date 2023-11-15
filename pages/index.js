import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Some Address 1",
        description: "This is the first meetup"
    },
    {
        id: 'm2',
        title: 'A First Meetup',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Some Address 2",
        description: "This is the second meetup"
    },
];

const HomePage = () => { 
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}

export default HomePage;