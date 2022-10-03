import Link from "next/link";
import classes from './button.module.css'
function Button(props) {
    // if the props passed to the button contain a link it should navigate between pages
    if (props.link) {
        return <Link href={props.link} >
            <a className={classes.btn} >
                {props.children}
            </a>
        </Link>
    }
    // if not it will behave as a regular button and do the functionallity passed into it 
    else {
        return <button className={classes.btn} onClick={props.onClick} >
            {props.children}
        </button>
    }
}
export default Button;
