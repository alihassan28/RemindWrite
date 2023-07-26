import React from "react"

function Footer(){

const year = new Date().getFullYear();

    return(
        <footer>
            <p>Developed by Ali Hassan Copyright © {year}</p>
        </footer>
    )
}

export default Footer;