import dotenv from "dotenv";
import expressConfig from "./src/startup/config";
import dbConfig from "./src/startup/db";
import express, { Express, Request, Response, application } from "express";

dotenv.config();
expressConfig();
dbConfig();
