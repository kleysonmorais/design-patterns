import express from "express";
import { FactoryPatternDemo } from "./factory-pattern/FactoryPatternDemo";

const server = express();

server.get("/", (_, res) => {
  res.send("Hello ts-node!");
});

server.get("/factory-pattern", (_, res) => {
  FactoryPatternDemo.main();
  res.send("done");
});

export default server;
