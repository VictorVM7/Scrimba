import React from 'react'
import '../assets/css/Cards.css'

export default function Card(props){
    return (
        <main>
            <div className="card">
                <img
                    src={props.img}
                    className='card--image'
                    alt='Image of Katie Zaferes'
                />
                <div className="card--stats">
                    <img
                        src="src\images\cards\star.png"
                        alt='Star Icon'
                    />
                    <span>{props.rate}</span>
                    <span className='gray'>(6) •</span>
                    <span className='gray'>{props.country}</span>
                </div>
                <h2>{props.title}</h2>
                <p><span>From ${props.price}</span> / person</p>
            </div>
        </main>
    )
}