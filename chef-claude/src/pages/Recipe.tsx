import Main from "../layout/Main.tsx";
import InputIngredients from "../components/Input.tsx";
import {useState} from "react";
import {toast} from "react-toastify";

// Icons
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

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

    const handleDeleteItem = (index, ingredient) => {
        setIngredients(values => {
            return values.filter((_, i) => i !== index);
        })

        toast(ingredient + ' Deleted');
    }

    return (
        <Main>
            <InputIngredients handleClick={addIngredient} inputValue={inputValue} onChangeInput={handleInputChange}/>
            <div className={'w-3/6'}>
                <h3 className={'text-4xl font-medium pb-10'}>Ingredients</h3>
                <div>
                    <ul className={'text-gray-500 list-disc'}>
                        {ingredients.map((ingredient, index) =>
                            <li key={index} className={'p-2 hover:bg-gray-50'}>
                                <div className={'flex justify-between align-items-center'}>
                                    <text className={'font-medium'}>
                                        {ingredient.toUpperCase()}
                                    </text>
                                    <div className={'flex gap-2'}>
                                        <button className={'p-2 bg-gray-100 rounded-lg hover:bg-gray-200'}>
                                            <MdOutlineEdit size={20}/>
                                        </button>
                                        <button className={'p-2 bg-red-100 rounded-lg hover:bg-red-200'} onClick={() => handleDeleteItem(index, ingredient)}>
                                            <MdDelete size={20} className={'text-red-500'}/>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </Main>
    )
}