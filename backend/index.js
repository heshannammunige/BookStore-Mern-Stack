import express, { request, response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";


const app = express();

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('welcome');
});

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("successfullt=y connected to database");
        app.listen(PORT,()=>{
            console.log(`App is working and listening to port: ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })