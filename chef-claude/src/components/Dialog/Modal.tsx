interface IModal{
    isOpen: boolean;
}

export function Modal(Props: IModal){

    return (
        <>
            {
                Props.isOpen &&
                <dialog className={'flex bg-black bg-opacity-50 top-0 right-0 bottom-0 left-0 fixed w-96 h-96'}>
                    <div>
                        <h2>Open</h2>
                        <p>{Props.isOpen}</p>
                    </div>
                </dialog>
            }
        </>
    )
}