const express = require('express');
const router = express.Router();
const validateProjectId = require('./projects-middleware');

router.get('/', validateProjectId, (req, res) => {
});

router.get('/:id', validateProjectId, (req,res) => {
});

router.post('/', validateProjectId, (req, res) => {
});

router.put('/:id', validateProjectId, (req, res) => {
});

router.delete('/:id', validateProjectId, (req, res) => {
});

router.get('/:id/actions', validateProjectId, (req,res) => {
});

module.exports = router; 