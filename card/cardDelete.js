function cardDelete(req, res) {
    console.log(req)
    // const cardId = req.params.cardId;
    // cards = cards.filter(el => el.id !== cardId)
    // console.log(cards)
    res.send("Card deleted")
}

module.exports = cardDelete;