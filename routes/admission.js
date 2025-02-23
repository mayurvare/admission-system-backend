const { Router } = require("express");
const { Admission } = require("../config/db");

const router = Router();

router.post('/api/formSubmission', async (req, res) => {
    try {
        console.log(req.body);
        const formData = req.body.formData;

        if (!formData) {
            return res.status(400).json({ message: 'Form data are required.' });
        }


        const newAdmission = new Admission(formData);
        await newAdmission.save();

        res.status(201).json({ message: 'Admission Form Submitted Successfully' });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: 'Form Already Submitted With the Aadhar no or Mail id' });
        }
        console.log(err);
        res.status(500).json({ message: 'Internal server error.' });
    }

});

module.exports = router