import { useState } from "react"
import { motion } from 'framer-motion';
import Link from "next/link"

export const Menu = () => {
    const links: string[] = ['/', 'cardapio', 'contatos']

    return (
        <motion.header
            className="cabecalho bg-transparent absolute z-[999]"
            initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 0.5}}
        >
            <div className="h-[100%] centralizar">
                <h1 className="text-[2rem] text-white">
                    <Link href='/'>LOGO</Link>
                </h1>
            </div>

            <nav className="w-[30%] h-[100%] centralizar">
                <ul className="w-[100%] centralizar justify-between p-1">
                    {
                        links.map(link => (
                            link === '/' ? (
                                <Link href={link} key={link} className="linksMenu cursor-pointer">Home</Link>
                            ) : (
                                <Link href={link} key={link} className="linksMenu">{link}</Link>
                            )
                        ))
                    }
                </ul>
            </nav>
        </motion.header>
    )
}