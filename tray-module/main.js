// const { app, Tray, Menu, BrowserWindow } = require('electron');
// const path = require('path')

// const iconpath = path.join(__dirname, 'tray.jpg')
// let appIcon = null;
// let win = null;

// app.on('ready',()=>{
//     win = new BrowserWindow({show: false});
//     appIcon = new Tray(iconpath);
//     var contextMenu = Menu.buildFromTemplate([
//         {label: 'Item1', type: 'radio'},
//         {label: 'Item2', submenu:[{label: 'submenu1'},{label: 'submenu2'}]},
//     ])
//     appIcon.setToolTip("this is a electron application")
//     appIcon.setContextMenu(contextMenu)
// })

const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
   win = new BrowserWindow({width: 800, height: 600})
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}

app.on('ready', createWindow)