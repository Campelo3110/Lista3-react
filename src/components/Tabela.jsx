function Tabela(){
    const usuarios = [
        { id: 1, nome: "Jeni", idade: 21 },
        { id: 2, nome: "Ste", idade: 20 },
        { id: 3, nome: "Vini", idade: 18 },
        { id: 4, nome: "Gian", idade: 21 },
        { id: 5, nome: "Cam", idade: 18 },
    ]

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario => 
                    <tr>
                        <td>{usuario.id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.idade}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Tabela