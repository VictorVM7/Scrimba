import Header from "../components/Header.tsx";
import {ReactNode} from "react";

export default function Main({ children } : { children: ReactNode }) {
    return (
        <>
            <Header />
            <main className={'p-5 justify-items-center'}>
                {children}
            </main>
        </>
    )
}