import Link from 'next/link'
function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: 'numeric'
    })
    const formattedDate = location.replace(', ', '\n');
    const expolreLink = `/events${id}`;
    return (<li>
        <img src={'/' + image} alt={title} />
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{humanReadableDate}</time>
                </div>
                <div>
                    <address>
                        {formattedDate}
                    </address>
                </div>
            </div>
            <div>
                <Link href={expolreLink} >Explore Event</Link>
            </div>
        </div>
    </li>);
}
export default EventItem;