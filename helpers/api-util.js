// to get all the events from firebase 
export async function getAllEvents() {
    const response = await fetch('https://nextjs-1798b-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    // firebase returns the data as an object so we should transform it to an array
    const events = [];
    for (const key in data) {
        events.push(
            {
                id: key,
                ...data[key],
            }
        );
    }
    return events;
}
export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    // filtering to get all the events that are featured
    return allEvents.filter((event) => event.isFeatured);
}
export async function getEventById(id) {
    const allEvents = await getAllEvents();
    // getting all the events id 
    return allEvents.find((event) => event.id === id);
}