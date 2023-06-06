import React from "react";

const Footer=()=>{
    const options={
        year:'numeric',
        month:'long',
        day:'numeric',
        weekday:'long'
    }
    const date=new Date().toLocaleDateString('en-US',options);
    
    return(
        <footer>
            <p>{date}</p>
        </footer>
    );
}

export default Footer;