const characterService = require("../services/character.service");

module.exports = {
    create: create,
    readAll: readAll,
    deleteEntry: deleteEntry
};

function create(req, res) {
    return characterService.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.send(err));
    ;
};

function readAll(req, res) {
    return characterService.readAll()
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
    ;
};

function deleteEntry(req, res) {
    return characterService.deleteEntry(req.body._id)
        .then(result => res.sendStatus(202))
        .catch(err => {
            console.log(err)
            res.sendStatus(500).send(err)
        });
    ;
}