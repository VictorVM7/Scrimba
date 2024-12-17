import Main from "../layout/Main.tsx";
import InputIngredients from "../components/Input.tsx";
import {useState} from "react";

export default function Recipe(){
    // State - Control state of variables
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    // Event - OnClick add items
    const addIngredient = () => {
        setIngredients([...ingredients, inputValue]);
        setInputValue("");
    }



    // Wrapper - Transforms the event into the string.
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <Main>
            <InputIngredients handleClick={addIngredient} inputValue={inputValue} onChangeInput={handleInputChange}/>
            <div className={'w-screen bg-gray-100'}>
                <h3 className={'text-2xl font-bold'}>Ingredients</h3>
                <ul>
                    {ingredients.map((ingredient, index) =>
                        <li key={index}>{ingredient}</li>
                    )}
                </ul>
            </div>
        </Main>
    )
}