let cards = [
    {id: '1', name: 'First card', status: 'todo', priority: 2},
    {id: '2', name: 'Second card', status: 'progress', priority: 5},
    {id: '3', name: 'Third card', status: 'review', priority: 10}
]

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.post('/card', (req, res) => {
        console.log(req);
        const card = req.body;
        cards.push({id: Math.trunc(Math.random() * 100).toString(), ...card});
        res.send('Card created');
    })

    app.get('/card', (req, res) => {
        res.send(cards)
    })

    app.patch('/card/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        const card = req.body;
        cards = cards.map(el => el.id === cardId ? ({id: el.id, ...card}) : el);
        res.send('Card updated')
    })

    app.delete('/card/:cardId', (req, res) => {
        console.log(req)
        const cardId = req.params.cardId;
        cards = cards.filter(el => el.id !== cardId)
        console.log(cards)
        res.send("Card deleted")
    });
}

module.exports = routes;