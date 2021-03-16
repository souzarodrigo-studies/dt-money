import {createServer, Model} from "miragejs";
import { IType } from "../enum/IType";



createServer({
    models: {
        transaction: Model,
    },
    
    seeds({db}) {
        db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelancer de website',
                    type: IType.deposit,
                    category: 'Dev',
                    amount: 6000,
                    createdAt: new Date('2021-02-12')
                },
                {
                    id: 2,
                    title: 'Freelancer de website',
                    type: IType.deposit,
                    category: 'Dev',
                    amount: 3000,
                    createdAt: new Date('2021-02-12')
                }
            ]
        });
    },
    
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction');
        });
        
        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            
            return schema.create('transaction', data);
        });
    }
});