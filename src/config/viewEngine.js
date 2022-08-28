import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); // para almacenar archivos css y javascrip files
    app.set("view engine", "ejs"); 
    app.set("views", "./src/views"); // almacenar archivos ejs
};

module.exports = configViewEngine;