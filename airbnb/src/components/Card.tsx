import '../assets/css/Cards.css'

export default function Cards(){
    return (
        <main>
            <div className="card">
                <img
                    src="src\images\cards\katie-zaferes.png"
                    className='card--image'
                    alt='Image of Katie Zaferes'
                />
                <div className="card--stats">
                    <img
                        src="src\images\cards\star.png"
                        alt='Star Icon'
                    />
                    <span>5.0</span>
                    <span className='gray'>(6) •</span>
                    <span className='gray'>USA</span>
                </div>
                <h2>Life Lessons with Katie Zaferes</h2>
                <p><span>From $136</span> / person</p>
            </div>
        </main>
    )
}