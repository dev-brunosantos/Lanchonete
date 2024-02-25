import { useState } from "react"
import Link from "next/link"

export const Menu = () => {
    const links:string[] = ['/', 'lanches', 'pizzas', 'contatos'] 

    return(
        <header className="cabecalho bg-transparent absolute">
            <div className="h-[100%] centralizar">
                <h1 className="text-[2rem] text-white">
                    <Link href='/'>LOGO</Link>
                </h1>
            </div>

            <nav className="w-[35%] h-[100%] centralizar">
                <ul className="w-[100%] centralizar justify-between p-1">
                    {
                        links.map(link => (
                            link === '/' ? (
                                <Link href={link} key={link} className="linksMenu cursor-pointer">Home</Link>
                            ) : (
                                <Link  href={link} key={link} className="linksMenu">{link}</Link>
                            )
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}