const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const ipc = electron.ipcMain
const dialog = electron.dialog

let win;

function createWindow() {
  win = new BrowserWindow();

  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true
    })
  );
  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
}

ipc.on('async-message',(e)=>{
    dialog.showErrorBox('An error message','Demo of an error message')
    e.sender.send('async-reply', 'Main process opened the error dialog')
})


ipc.on('sync-message',(e)=>{
    e.returnValue = 'sync-reply'
})

app.on("ready", createWindow);

app.on("window-all-closed", function(){
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function(){
  if (win === null) {
    createWindow;
  }
});
