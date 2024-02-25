import Image from "next/image";

interface Produtos {
    imagem: any,
    descricaoImg: string,
    nome: string,
    preco: number,
    descricao: string,
}

export const CardProduto = ({ imagem, descricaoImg, nome, preco, descricao }: Produtos) => {
    return (
        <div>
            <div>
                <Image src={imagem} alt={descricaoImg} />
            </div>
            <h2>{nome}</h2>
            <p>R$ {preco}</p>

            <div>
                <p>{descricao}</p>
            </div>
        </div>
    )
}