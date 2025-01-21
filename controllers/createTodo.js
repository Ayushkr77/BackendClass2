// import the model
const Todo=require("../models/Todo");

// define route handler
exports.createTodo= async(req,res)=> {  // async fun bcz baaki ka sara code wait na kre, jab bhi db se kch interaction krna ho we'll use async
    try {
        // extract title and desc from request body
        const {title,description}=req.body;
        // create new todo and insert in db
        const response = await Todo.create({title,description});
        // send a json response with a sucess flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created successfully"
            }
        );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}