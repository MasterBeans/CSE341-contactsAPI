const { mongo } = require('mongoose');
const contact = require('../models/Contact');


const getAllContactsData = async (req, res) => {
    try {
        
        const data = await contact.find();
        console.log("Fetched data:", data); // Debug log
        if (!data) {
            return res.status(404).json({ message: 'Contacts data not found' });
        }
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve data' });
    }
};

const getContactById = async (req, res)=>{
    try {
        const data = await contact.findById(req.params.id);
        console.log("Fetched data:", data); // Debug log
        if (!data) {
            return res.status(404).json({ message: 'Contacts data not found' });
        }
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve data' });
    }
}


const createContact = async (req, res) => {
    try {
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;
        const newContact = new contact({ firstName, lastName, email, favoriteColor, birthday });
        const savedContact = await newContact.save();
        res.status(201).json({ id: savedContact._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create contact' });
    }
}

const updateContact = async (req, res) => {
    try {
        const updatedContact = await contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update contact' });
    }
}

const deleteContact = async (req, res) => {
    try {
        const deletedContact = await contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete contact' });
    }
}


module.exports = {
    getAllContactsData, 
    getContactById,
    createContact,
    updateContact,
    deleteContact
}