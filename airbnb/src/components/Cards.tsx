import React from 'react'
import '../assets/css/Card.css'
import Card from './Card'

export default function Cards(){
    return (
        <main>
            <Card 
                img="src\images\cards\katie-zaferes.png"
                title="Life Lessons with Katie Zaferes"
                rate="5.0"
                country="USA"
                price="136"
            />
        </main>
    )
}