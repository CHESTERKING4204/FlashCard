const express = require('express');
const Qa = require('./model/question');


const route = express.Router();

//POST - To insert the question
route.post('/question', async (req, res) => {

    const { question , answer } = req.body;

    try {
        const QuestionAdded = await Qa.create({
            question:question,
            answer:answer
        });
        res.status(201).json(QuestionAdded);
    } catch (error) {
        console.log(error, 'not me must be another one');
        res.status(400).json({ error: error.message });
    }
});


//GET - To get the info for all
route.get("/question", async (req, res) => {
    try {
        const ShowAll = await Qa.find();
        return res.status(200).json(ShowAll);
    } catch (error) {
        console.log(error, 'thats the issue');
        res.status(500).json({ error: error.message });
    }
    // res.send("api running");
});

//To search the id of one question
route.get('/question/:id',async (req,res)=>{
    const {id} = req.params;

    try{
        const getOne = await Qa.findById(id);
        res.status(200).json(getOne);
    }catch (error){
        console.log(error,'may be another place but not here')
        res.status(500).json({error:error.message});
    }

});

//To delete the question
route.delete("/question/:_id", async (req, res) => {
    const { _id } = req.params;

    try {
        const deleteData = await Qa.findByIdAndDelete(_id);
        res.status(200).json(deleteData);
    } catch (error) {
        console.log(error, 'thats the issue');
        res.status(500).json({ error: error.message });
    }
});


//To update the data
route.patch("/question/:id", async (req, res) => {
    const { id } = req.params;
    const { question,answer } = req.body;
    try {
        const UpdateData = await Qa.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json(UpdateData);
    } catch (error) {
        console.log(error, 'thats the issue');
        res.status(500).json({ error: error.message });
    }
    // res.send("api running");
});


module.exports = route;