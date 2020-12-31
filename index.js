const cp = require("child_process");
const cors = require("cors");
const exec_options = {
  cwd: null,
  env: null,
  encoding: "utf8",
  timeout: 0,
  maxBuffer: 200 * 1024,
  killSignal: "SIGTERM",
};
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/:cmd", (req, res) => {
  cp.exec(req.params.cmd, exec_options, (err, stdout, stderr) => {
    console.log("#. exec");
    console.log(stdout);
    console.log(stderr);
    console.log(err);
    res.send({ stderr, stdout, err });
  });
});
app.listen(5000, () => {
  console.log("server up on 5000 : http://localhost:5000");
});
