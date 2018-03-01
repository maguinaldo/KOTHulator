const characterService = require("../services/character.service");

module.exports = {
    create: create,
    readAll: readAll
};

function create(req, res) {
    return characterService.create(req.body)
        .then(result => res.sendStatus(201).json(result))
        .catch(err => res.sendStatus(500).send(err));
    ;
};

function readAll(req, res) {
    return characterService.readAll()
        .then(result => res.send(result))
        .catch(err => res.sendStatus(500).send(err));
    ;
};