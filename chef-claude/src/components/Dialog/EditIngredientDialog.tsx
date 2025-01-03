import React, {useState} from 'react';

interface EditIngredientDialogProps {
    ingredient: string;
    onSave: (ingredient: string) => void;
}

const EditIngredientDialog : React.FC<EditIngredientDialogProps> = ({
    ingredient,
    onSave,
}) => {

    const [editValue, setEditValue] = useState(ingredient);

    const handleSave = () => {
        if (editValue.trim() !== "") {
            onSave(editValue.trim());
        }
    }

    return (
        <div className={'justify-items-center bg-black h-screen w-screen bg-opacity-50 absolute m-0 top-0 bottom-0 right-0 left-0'}>
            <div className={'bg-amber-50'}>
                <div>
                    <text>Alteração</text>
                </div>
                <div>
                    <input type={'text'} value={editValue} onChange={(e) => setEditValue(e.target.value)}/>
                    <button onClick={handleSave}>Editar</button>
                </div>
            </div>
        </div>
    );
};

export default EditIngredientDialog;