const express = require('express')
const router = express.Router()
const Form = require('../model')


router.post('/form', async (req, res) => {

    const formData = req.body;
    const form = new Form(formData);
    try {
        const datatosave =await form.save();
        res.status(200).json("New Form Added Successfully")
    }
    catch (err) { console.log(err) }
})


router.get('/form', async (req, res) => {
    try {
        const data = await Form.find()
        res.json(data)
    } catch (err) {
        console.log("Error Occured")
    }
})

router.get('/form/:id', async (req, res) => {
    try {
        const data = await Form.findById(req.params.id)
        res.json(data)
    } catch (err) {
        console.log("Error Occured", err)
    }
})

router.put('/form/:id', async (req, res) => {
    try {
        const result = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(result)
    } catch (err) {
        console.log("Error Occured", err)
    }
})

router.delete("/form/:id",async(req,res)=>{
    try{
        const data = await Form.findByIdAndDelete(req.params.id)
        res.status(200).json("Data Deleted")

    }catch(err){
        console.log("Data not Found")
    }
})




module.exports = router;