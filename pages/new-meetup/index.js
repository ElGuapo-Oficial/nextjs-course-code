;import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const router = useRouter();

    const addMetupHandler = async(enteredMeetupData) => {
        try {
            const response = await fetch("/api/new-meetup", {
                method: 'POST',
                body: JSON.stringify(enteredMeetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            console.log(data);
            router.push('/');
        } catch (error) {
            console.log("NAJASH ERROR: ", error);
        }
    }

    return <NewMeetupForm onAddMeetup={addMetupHandler}/>
}

export default NewMeetupPage;