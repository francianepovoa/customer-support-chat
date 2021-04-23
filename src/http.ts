import express, { request } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";

import { routes } from "./routes";

const app = express();

// To use HTML in routes
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
	return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
	return response.render("html/admin.html");
});

const http = createServer(app); // Creating http protocol
const io = new Server(http); // Creating WS protocol

io.on("connection", (socket: Socket) => {
	console.log("Connected", socket.id);
});

app.use(express.json());

app.use(routes);

export { http, io };
