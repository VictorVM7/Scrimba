import React, {ChangeEventHandler} from "react";

interface InputIngredientsProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    onChangeInput: ChangeEventHandler<HTMLInputElement>;
    inputValue: string;
}

export default function  InputIngredients ({handleClick, inputValue, onChangeInput}: InputIngredientsProps) {
    return (
        <nav className={'my-10 justify-items-center align-middle align-items-center'}>
            <div className={'flex gap-4'}>
                <input className={'w-96 h-10 p-4 border-2 rounded-md'} placeholder={'e.g oregano'} value={inputValue} onChange={onChangeInput}/>
                <button className={'px-4 py-1 bg-black text-white rounded-md'} onClick={handleClick}>
                    <text className={'font-medium'}>
                        + Add ingredient
                    </text>
                </button>
            </div>
        </nav>
    )
}