console.log("hi from index");

const BrowserWindow = require("electron").remote.BrowserWindow;
const path = require("path");
const url = require("url");

const newWindowBtn = document.getElementById("newWindowBtn");
newWindowBtn.addEventListener("click", e => {
  let winThree = new BrowserWindow({ width: 600, height: 400 });
  winThree.loadURL(
    url.format({
      pathname: path.join(__dirname, "three.html"),
      protocol: "file:",
      slashes: true
    })
  );
  winThree.webContents.openDevTools();
});
