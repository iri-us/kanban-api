function cardCreate(req, res) {
    console.log(req);
    // const card = req.body;
    // cards.push({id: Math.trunc(Math.random() * 100).toString(), ...card});
    res.send('Card created');
}

module.exports = cardCreate;