import React from 'react'

const Footer = (props) => {
    console.log(process.env.REACT_APP_VERSION)
    return (
    <div>
        <span>{process.env.REACT_APP_VERSION}</span>
    </div>
)
    }
export default Footer