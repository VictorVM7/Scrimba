import React from 'react'
import '../assets/css/Cards.css'


// Destructuring Props is declare any parameter that has been passed in props object as it follows
export default function Card(props){
    let badgeText

    if(props.item.openSpots === 0){
        badgeText = 'SOLD OUT'
    }
    else if (props.item.location === "Online"){
        badgeText = 'ONLINE'
    }

    return (
        <main>
            <div className="card">
                {badgeText && <div className='card--badge'>{badgeText}</div>}
                <img
                    src={props.item.img}
                    className='card--image'
                    alt='Image of Katie Zaferes'
                />
                <div className="card--stats">
                    <img
                        src="public\images\cards\star.png"
                        alt='Star Icon'
                    />
                    <span>{props.item.stats.rating}</span>
                    <span className='gray'>{props.item.stats.reviewCount} •</span>
                    <span className='gray'>{props.item.location}</span>
                </div>
                <h2>{props.item.title}</h2>
                <p><span><b>From ${props.item.price}</b></span> / person</p>
            </div>
        </main>
    )
}


/*
// Destructuring Props: Destructuring Props is declare any parameter that has been passed in props object as it follows.
//                      The parameters name may be the same or you can use ":" to rename it.

export default function Card({img, title, rate, country, price}){
    return (
        <main>
            <div className="card">
                <img
                    src={img}
                    className='card--image'
                    alt='Image of Katie Zaferes'
                />
                <div className="card--stats">
                    <img
                        src="src\images\cards\star.png"
                        alt='Star Icon'
                    />
                    <span>{rate}</span>
                    <span className='gray'>(6) •</span>
                    <span className='gray'>{country}</span>
                </div>
                <h2>{title}</h2>
                <p><span>From ${price}</span> / person</p>
            </div>
        </main>
    )
}
*/