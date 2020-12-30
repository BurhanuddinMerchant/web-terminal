const execute = () => {
  const cmd = document.getElementById("terminal").value;
  if (cmd) {
    fetch("http://localhost:5000/" + cmd)
      .then((res) => res.json())
      .then((ans) => {
        console.log(ans);
        document.getElementById("output").innerHTML =
          ans.stdin + "  " + ans.stdout + "  " + ans.err;
      });
  }
};
