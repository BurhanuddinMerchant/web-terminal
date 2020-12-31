const outputConsole = document.getElementById("output");
const execute = () => {
  const cmd = document.getElementById("terminal").value;
  if (cmd) {
    fetch("http://localhost:5000/" + cmd)
      .then((res) => res.json())
      .then((ans) => {
        const logDiv = document.createElement("div");
        logDiv.innerHTML = "$>~ " + cmd + "<br/>";
        console.log(ans);
        const { err, stderr, stdout } = ans;
        if (err) {
          console.log(err);
        }
        if (stdout) {
          logDiv.innerHTML = logDiv.innerHTML + stdout;
        } else {
          logDiv.innerHTML = logDiv.innerHTML + "<error>" + stderr + "</error>";
        }
        outputConsole
          .appendChild(logDiv)
          .appendChild(document.createElement("br"));
      });
  }
};
