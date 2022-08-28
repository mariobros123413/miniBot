import express from "express";
import miniBotController from "../controllers/miniBotController";

let router = express.Router(); // let es para declarar var

let initWebRoutes = (app) =>{
    router.get("/", miniBotController.test);

    router.get("/webhook", miniBotController.getWebhook);
    router.get("/webhook", miniBotController.postWebhook);

    return app.use("/", router);
};

module.exports = initWebRoutes;