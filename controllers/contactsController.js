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

module.exports = {
    getAllContactsData, getContactById,
}