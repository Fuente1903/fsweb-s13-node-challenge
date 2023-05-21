const express = require('express');
const router = express.Router();
const validateActionId = require('./actions-middlware');

router.get('/', validateActionId, (req, res) => {
});

router.get('/:id', validateActionId, (req,res) => {
});

router.post('/', validateActionId, (req, res) => {
});

router.put('/:id', validateActionId, (req, res) => {
});

router.delete('/:id', validateActionId, (req, res) => {
});

module.exports = router;

r