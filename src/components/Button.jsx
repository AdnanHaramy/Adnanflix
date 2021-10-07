import React from 'react';
import './styles.css'
class Button extends React.Component {
    render() {
        return <div className= "Div" >
            <button className="Button1">
            <p id="buttonParagraph">Always Tasty Burger</p>
            </button>
        </div>;
    }
}
export default Button;