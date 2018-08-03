const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get("/", (request, response, next) => {
    queries.list()
    .then(tacos => {
        response.json({tacos});
    })
    .catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(taco => {
        taco
            ? response.json({taco})
            : response.status(404).json({message: 'No Tacos.'})
    })
    .catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body)
    .then(taco => {
        response.status(201).json({taco});
    })
    .catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id)
    .then(() => {
        response.status(204).json({deleted: true});
    })
    .catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body)
    .then(taco => {
        response.json({taco});
    })
    .catch(next);
});

module.exports = router;