// more than one segment after /events will show this page
import { useRouter } from 'next/router';
import { getFeaturedEvents } from '../../dummy-data';
function FilteredEventsPage() {
    const router = useRouter();
    const filterData = router.query.slug;
    // this component is rendered twice so we should return Loading statment until the data from the URL arrives 
    if (!filterData) {
        return <p className='center'>Loading...</p>
    }
    // only intersted in the year and the month 
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;
    if (isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth > 12 ||
        numMonth < 1) {
        return <p>Invalid filter , please adjust your values</p>
    }
    const filteredEvents = getFeaturedEvents({
        year: numYear,
        month: numMonth,
    });
    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No Events found for the chosen filter</p>
    }
    return <div>
        <h1>Filtered Events</h1>
    </div>
}
export default FilteredEventsPage;
