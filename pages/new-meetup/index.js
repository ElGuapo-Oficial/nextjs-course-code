import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const addMetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    }

    return <NewMeetupForm onAddMeetup={addMetupHandler}/>
}

export default NewMeetupPage;