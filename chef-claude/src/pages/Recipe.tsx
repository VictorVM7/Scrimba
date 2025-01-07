import Main from "../layout/Main.tsx";
import InputIngredients from "../components/Input.tsx";
import { useState } from "react";
import { toast } from "react-toastify";

// Icons
import {MdDelete, MdOutlineEdit, MdNoFood} from "react-icons/md";
import Modal from "../components/Dialog/Modal.tsx";


export default function Recipe() {
    // State - Control state of variables
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [IsIngredientListInserted, setIsIngredientListInserted] = useState(false);

    // Event - OnClick add items
    const addIngredient = () => {
        if (inputValue === "") return
        setIngredients((prev) => [...prev, inputValue]);
        setInputValue("");
      
    const [editingIngredient, setEditingIngredient] = useState<string | null>(null);

    // Event - OnClick add items
    function addIngredient() {
        if (inputValue.trim() === "") return; // Avoid adding empty values
        setIngredients((prevIngredients) => [...prevIngredients, inputValue.trim()]);
        setInputValue(""); // Clear the input field
        setIsIngredientListInserted(true);
        toast("Ingredient added!");
    }

    // Get text in input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    // Delete items
    const handleDeleteItem = (index: number, ingredient: string) => {
        setIngredients((values) => {
            const updatedIngredients = values.filter((_, i) => i !== index);

            // Verify if there are any items in the list
            if (updatedIngredients.length === 0) {
                setIsIngredientListInserted(false);
            }

            return updatedIngredients;
        });

        toast(`${ingredient} deleted.`);
    };

    // Delete all items
    const deleteAllIngredients = () => {
        setIngredients([]);
        setIsIngredientListInserted(false);
    }

    return (
        <Main>
            <InputIngredients handleClick={addIngredient} inputValue={inputValue} onChangeInput={handleInputChange}/>
            {
                IsIngredientListInserted &&
                <>
                    <div className={'w-3/6'}>
                        <div>
                            <h3 className={'text-4xl font-medium pb-10'}>Ingredients on hand:</h3>
                        </div>
                        <div className={'my-5 flex align-middle justify-end'}>
                            <button className={'px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200'}
                                    onClick={deleteAllIngredients}>
                                <text className={'text-red-700'}>
                                    Delete All
                                </text>
                            </button>
                        </div>
                        <div>
                            <ul className={'text-gray-500'}>
                                {ingredients.map((ingredient, index) =>
                                    <li key={index} className={'p-2 hover:bg-gray-50'}>
                                        <div className={'flex justify-between align-items-center'}>
                                            <text className={'font-medium'}>
                                                {ingredient.toUpperCase()}
                                            </text>
                                            <div className={'flex gap-2'}>
                                                <Modal
                                                    title={`Edit ingredient`}
                                                    icon={<MdOutlineEdit/>}
                                                    text={`Change the ingredient name to ${ingredient.toUpperCase()}`}
                                                />
                                                <button className={'p-2 bg-red-100 rounded-lg hover:bg-red-200'}
                                                        onClick={() => handleDeleteItem(index, ingredient)}>
                                                    <MdDelete size={20} className={'text-red-500'}/>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className={'w-3/6 my-5'}>
                        {
                            IsIngredientListInserted &&
                            <div className={'flex justify-between align-middle p-5 bg-orange-50'}>
                                <div>
                                    <div>
                                        <text className={'font-bold text-amber-600 text-xl'}>Ready for the recipe?
                                        </text>
                                    </div>
                                    <div>
                                        <text className={'text-gray-500'}>Generate a recipe from your list of
                                            ingredients.
                                        </text>
                                    </div>
                                </div>
                                <div className={'flex align-middle'}>
                                    <button className={'py-2 px-4 bg-amber-600 text-white rounded-md'}>
                                        <text className={'font-medium'}>Get A Recipe</text>
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                </>
            }
            {
                !IsIngredientListInserted &&
                <>
                    <div className={'flex flex-col items-center align-middle gap-5'}>
                        <MdNoFood size={110} className={'text-gray-400 opacity-60'}/>
                        <span className={'flex font-bold text-xl text-center text-gray-400 opacity-60'}>
                            No ingredients has been chosen yet. <br/> Please, insert at least one ingredient to get your recipe!
                        </span>
                    </div>
                </>
            }
        </Main>
    );
}
