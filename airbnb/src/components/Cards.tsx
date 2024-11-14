import React from 'react'
import '../assets/css/Card.css'
import Card from './Card'
import { CardsData } from '../data/CardsData'

export default function Cards(){

    return (
        <main>
            <div className='cards--list'>
                {
                    CardsData.map((card, index) => (
                        <Card 
                            key={index}
                            img={card.img}
                            title={card.title}
                            rate={card.stats.rating}
                            review= {card.stats.reviewCount}
                            country={card.location}
                            price={card.price}
                            openSpots={card.openSpots}
                        />
                    ))
                }
            </div>
        </main>
    )
}