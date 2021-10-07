import React from 'react';
import './styles.css'
class Grid1 extends React.Component{
    render(){
        return <div className="Grid1">
        <div className="divGrid">Hello</div>
        <div className="divGrid">
        <div className="Grid2">
            <div className="child">hello</div>
            <div className="child">hello</div>
        </div>
        </div>
        </div>;
    }
}
export default Grid1; 