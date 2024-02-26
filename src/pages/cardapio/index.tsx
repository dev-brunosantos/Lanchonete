import { CardProduto } from "@/components/Cards/CardProdutos";

export default function Cardapio() {
    return (
        <section>
            <CardProduto 
                key={0}
                imagem={require('../../../public/lanche.jpg')}
                descricaoImg="teste"
                nome="Burger 2"
                preco={35.90}
                descricao="TEste"
            />
        </section>
    )
}