import React from "react";
import './mystyle.css';

const Stylesheet = (props) => {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
      <h1 className= {`${className} font-xl`} >Passionately Curious!</h1>
        </div>
    )
}

export default Stylesheet;