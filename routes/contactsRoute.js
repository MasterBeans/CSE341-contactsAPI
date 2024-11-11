const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

// GET all contacts
// router.get('/', async (req, res) => {
//   try {
//     const contacts = await Contact.find();
//     console.log(contacts)
//     res.json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// });
router.get('/', contactsController.getAllContactsData);



// GET a specific contact by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const contact = await Contact.findById(req.params.id);
//     if (!contact) return res.status(404).json({ message: 'Contact not found' });
//     res.json(contact);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// });
router.get('/:id', contactsController.getContactById);


module.exports = router;