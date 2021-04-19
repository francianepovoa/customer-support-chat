import express from "express";

const app = express();

app.get("/", (req, res) => {
	return res.json({
		message: "Hello!",
	});
});

app.post("/", (req, res) => {
	return res.json({
		message: "User saved successfully",
	});
});

app.listen(3333, () => console.log("Server is running"));
