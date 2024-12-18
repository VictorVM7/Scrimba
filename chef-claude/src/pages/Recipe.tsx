import Main from "../layout/Main.tsx";
import InputIngredients from "../components/Input.tsx";
import {useState} from "react";
import {toast} from "react-toastify";

export default function Recipe(){
    // State - Control state of variables
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    // Event - OnClick add items
    const addIngredient = () => {
        if (inputValue === ""){
            return
        }
        setIngredients([...ingredients, inputValue]);
        setInputValue("");

        toast('Ingredient Added');
    }

    // Wrapper - Transforms the event into the string.
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <Main>
            <InputIngredients handleClick={addIngredient} inputValue={inputValue} onChangeInput={handleInputChange}/>
            <div className={'w-3/6'}>
                <h3 className={'text-4xl font-medium pb-10'}>Ingredients</h3>
                <div>
                    <ul className={'text-gray-500 list-disc'}>
                        {ingredients.map((ingredient, index) =>
                            <li key={index}>{ingredient}</li>
                        )}
                    </ul>
                </div>
            </div>
        </Main>
    )
}