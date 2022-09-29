import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
function HomePage() {

    const featuredEvents = getFeaturedEvents();

    return <div>
        {/* passing the data to the EventList component and
     the EventList component will pass it to the EventItem component */}
        <EventList
            items={featuredEvents}
        />
    </div>
}

export default HomePage;
