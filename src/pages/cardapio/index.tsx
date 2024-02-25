import { CardProduto } from "@/components/Cards/CardProdutos";

export default function Cardapio() {
    return (
        <section>
            <CardProduto 
                key={0}
                descricao="TEste"
                imagem={''}
                descricaoImg="teste"
                nome="Burger 1"
                preco={35.90}
            />
        </section>
    )
}