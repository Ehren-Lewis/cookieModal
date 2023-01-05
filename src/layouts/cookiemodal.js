import { useState, useEffect } from "react";

import "./cookiemodal.css"


const CookieModal = () => {
    const [showModal, setShowModal ] = useState(true)

    const cookieHandle = e => {
        console.log(e.target);
        setShowModal(false)

    }
    return (
        <>

        <div className="cookie-modal-style rounded" style={{display: showModal ? "flex": "none"}}>
            <h3>We value your privacy</h3>
            <p>We use cookies to enhance your browsing exprience, but
                we also desire to create your browsing experience as comfortable as possible.
                Below are some options we have to help assist you in this, so please choose wisely
            </p>

        <div className="button-container">
            <button onClick={e => cookieHandle(e)} id="customize" className="btn btn-success">Customize</button>
            <button onClick={e => cookieHandle(e)} id="reject" className="btn btn-danger">Reject All</button>
            <button onClick={e => cookieHandle(e)} id="accept" className="btn btn-info"> Accept All</button>
            </div>
        </div>
        </>
    )
}

export default CookieModal;