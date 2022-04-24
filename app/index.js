const express = require('express')
const db = require("./database");

const app = express()
const port = 3000


app.get('/', async (req,res) => {
    await db.insertPerson()
    const people =  await db.getPeople()
    console.log(people)
    const peopleNames = people.map(person => {
        return person.name
    });
    const html = `
    <h1>Full Cycle Rocks!</h1>
    <br/>
    <br/>
    <h3> Nomes cadastrados </h3>
    <p> ${peopleNames.join()}</p>
    `
    res.send(html)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

