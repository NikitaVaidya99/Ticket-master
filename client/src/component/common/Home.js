import React from 'react'
import bg from '../../bg.png'

export default function Home(props){
    return (
        <div >
            <h2 className="text-center">Welcome to the Ticket Master </h2>
            <div className="row">
                <div className="offset-md-2 pb4">
                <img src={bg} className="img-rounded" alt="ticket master"/>
                </div>
           
           
            </div>
           
        </div>
    )
}

