function ListaMap() {

    const nomes = [
        "Caio",
        "Campelo",
        "Stefany",
        "Ferreira",
        "Guilherme"
    ]

    const listItens = nomes.map(item =>
        <li>{item}</li>
    )

    return(
        <ul>
            {listItens}
        </ul>
    )
}

export default ListaMap