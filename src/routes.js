const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.post('/employees', controllers.createEmployee);
router.get('/employees', controllers.listEmployees);
router.get('/employees/:id', controllers.getEmployee);
router.put('/employees/:id', controllers.updateEmployee);
router.delete('/employees/:id', controllers.deleteEmployee);

module.exports = router;