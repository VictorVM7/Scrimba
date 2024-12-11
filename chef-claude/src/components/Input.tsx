export default function InputIngredients () {
    return (
        <nav className={'bg-gray-400 w-screen h-40 justify-items-center align-middle'}>
            <div className={'flex gap-4'}>
                <input className={'w-96 h-10 p-4 border-2 rounded-md'} placeholder={'e.g oregano'}/>
                <button className={'w-52 px-4 py-1 bg-black text-white rounded-md'}>
                    <text className={'font-medium'}>
                        + Add ingredient
                    </text>
                </button>
            </div>
        </nav>
    )
}