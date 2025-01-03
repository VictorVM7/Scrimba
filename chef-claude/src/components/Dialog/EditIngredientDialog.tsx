import React, {useState} from 'react';

interface EditIngredientDialogProps {
    ingredient: string;
    onSave: (ingredient: string) => void;
    onClose: () => void;
}

const EditIngredientDialog : React.FC<EditIngredientDialogProps> = ({
    ingredient,
    onSave,
    onClose,
}) => {

    const [editValue, setEditValue] = useState(ingredient);

    const handleSave = () => {
        if (editValue.trim() !== "") {
            onSave(editValue.trim());
            onClose();
        }
    }

    return (
        <div className={''}>
            <div>
                <text>Alteração</text>
            </div>
            <div>
                <input type={'text'} value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                <button onClick={handleSave}></button>
            </div>
        </div>
    );
};

export default EditIngredientDialog;