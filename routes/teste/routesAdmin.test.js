const resquest =require('supertest');
const app= require('../routesAdim');
describe ('Teste de rota',()=>{
    it("It should respond with an OK", async () => {
        const res=await resquest('http://localhost:3000').get('/about')
        expect(res.statusCode).toEqual(200)
    
    })
})