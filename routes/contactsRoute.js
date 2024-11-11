const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

router.get('/', contactsController.getAllContactsData);

router.get('/:id', contactsController.getContactById);


module.exports = router;