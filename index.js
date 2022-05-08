const express = require("express");
const app = express();

const path = require("path");
const docRoot = path.join(__dirname, "public/dev/dist");

app.use(express.static(docRoot));

const server = require("http").createServer(app);
const newPort = 5000;
const PORT = process.env.PORT || newPort;

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`A user ${socket.id} connected.`);
  // socket.on("register-patient", (data) => {
  //   console.log(`${socket.id} registered`, data);
  //   socket.broadcast.emit("register-patient", JSON.parse(JSON.stringify(data)));
  // });
  // socket.on("doctor-finish", (data) => {
  //   console.log(`${socket.id} doctor finished`, data);
  //   socket.broadcast.emit("doctor-finish", data);
  // });
  socket.on("disconnected", () => {
    socket.broadcast.emit("user-disconnected", socket.id);
    console.log(`${socket.id} disconnected`);
  });
  socket.on("register from client", (data) => {
    socket.emit("register from server", data);
    console.log(`register ${JSON.stringify(data)}`);
  });
  socket.on("delete from client", (data) => {
    socket.emit("delete from server", data);
    console.log(`delete ${JSON.stringify(data)}`);
  });
});

server.listen(PORT, () => {
  console.log(`demo web server running at http://localhost:${PORT}`);
});
