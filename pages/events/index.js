import { getAllEvents } from '../../dummy-data'
import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';
function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();
    // this is the function that is passed to
    // the EventsSearch component to trigger the props.onSearch method 
    function findEventHandler(year, month) {
        // the path we want to navigate to 
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    return (
        <Fragment>
            <EventsSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </Fragment>
    );

}
export default AllEventsPage;
