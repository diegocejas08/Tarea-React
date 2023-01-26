import React from "react"
import '../styles/tarjeta-icbc.css'

function IcbcCard({ id, image, title, name, description }) {
    return (
        <div className="content" key={id}>
            <div className="card-complete" >
                <div className="image">
                    <img src={image} alt={name} />

                    <div className="card-text">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IcbcCard