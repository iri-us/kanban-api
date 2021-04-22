const cardCreate = require("./card/cardCreate");
const cardDelete = require("./card/cardDelete");
const cardUpdateById = require("./card/cardUpdateById");
const cardGetAll = require("./card/cardGetAll");

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.post('/card', cardCreate)
    app.get('/card', cardGetAll)
    app.patch('/card/:cardId', cardUpdateById)
    app.delete('/card/:cardId', cardDelete);
}

module.exports = routes;