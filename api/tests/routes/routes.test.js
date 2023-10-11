const session = require("supertest")
const server = require("../../src/app")

const agent = session(server)

describe("GET /dogs", () => {
    it("responde con un status 200 y retorna como json", async()=>{
        await agent.get("/dogs").expect(200).expect('Content-Type', /application\/json/)
    })

    it("Deveria devolver la raza esperada", async() => {
       const response =  await agent.get("/dogs/1");
       const data = response.body;
       expect(data[0].name).toEqual("Affenpinscher");
    });
});

describe("POST /dogs",() => {
    it("Deberia devolver el codigo de estado correcto", async () => {
        const response = (await agent.post('/dogs').send({
            name: "puchi",
            height:"35 - 40",
            weight: "8 - 9",
            life_span: "10 - 12",
            temperament: ['Proud','Brave','Respectful'] 
        }));
                expect(response.status).toBe(200);
    });

    it("Deberia devolver el content-type esperado", async() => {
        const response = (await agent.post('/dogs').send({
            name: "puchi",
            height:"35 - 40",
            weight: "8 - 9",
            life_span: "10 - 12",
            temperament: ['Proud','Brave','Respectful'] 
        })); 
        expect(response.headers['content-type']).toMatch('application/json')
    })
});