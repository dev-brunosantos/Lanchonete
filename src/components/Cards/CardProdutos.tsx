import { useState } from "react";
import Image from "next/image";

interface Produtos {
    imagem: any,
    descricaoImg: string,
    nome: string,
    preco: number,
    descricao: string,
}

export const CardProduto = ({ imagem, descricaoImg, nome, preco, descricao }: Produtos) => {

    const [abrirDescricao, setAbrirDescricao] = useState('none')

    return (
        <div className="w-[200px] border-solid border-4 flex flex-col items-center" 
            onClick={() => {
                abrirDescricao == 'none' ? setAbrirDescricao('flex') : setAbrirDescricao('none')
            }}
        >
            <div>
                <Image src={imagem} alt={descricaoImg} />
            </div>
            <h2 className="text-[1.4rem] font-bold">{nome}</h2>
            <p className="text-[1.2rem]">R$ {preco}</p>

            <div style={{display: abrirDescricao}}>
                <p>{descricao}</p>
            </div>
        </div>
    )
}