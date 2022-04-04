import classes from './event-item.module.css';
import Button from '../UI/button';
import AddressIcon from '../Icons/address-icon';
import ArrowRightIcon from '../Icons/arrow-right-icon';
import DateIcon from '../Icons/date-icon';
function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: 'numeric'
    })
    const formattedDate = location.replace(', ', '\n');
    const expolreLink = `/events${id}`;
    return (
        <li className={classes.item} >
            <img src={'/' + image} alt={title} />
            <div className={classes.content} >
                <div className={classes.summary} >
                    <h2>{title}</h2>
                    <div className={classes.date} >
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address} >
                        <AddressIcon />
                        <address>
                            {formattedDate}
                        </address>
                    </div>
                </div>
                <div className={classes.actions} >
                    <Button link={expolreLink} >
                        <span>
                            Explore Event
                        </span>
                        <span className={classes.icon} >
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}
export default EventItem;