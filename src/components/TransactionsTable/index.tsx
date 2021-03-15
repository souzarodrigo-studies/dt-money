import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento de sistemas</td>
                        <td>16/03/2021</td>
                    </tr>
                    <tr>
                        <td>Carro</td>
                        <td className="withdrawn">- R$1.300</td>
                        <td>Pagamento de contas</td>
                        <td>16/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
