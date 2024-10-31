import reactLogo from "../assets/react.svg"

export default function Navbar(){
    return (
        <nav className="nav">
            <div className="nav-logo">
                <img src={reactLogo} alt="React Logo" />
                <h3>ReactFacts</h3>
            </div>
            <div className="nav-items">
                <h4>React Course - Projet 1</h4>
            </div>
        </nav>
    )
}