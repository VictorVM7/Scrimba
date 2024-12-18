import './App.css'
import Recipe from "./pages/Recipe.tsx";
import {ToastContainer} from "react-toastify";

export default function App() {
    return (
        <>
            <ToastContainer autoClose={8000} position={'bottom-right'} />
            <Recipe />
        </>
    )
}
