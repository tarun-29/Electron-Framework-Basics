const electron = require('electron')
const ipc = electron.ipcRenderer

const asyncBtn = document.getElementById('async-Btn')
asyncBtn.addEventListener('click',()=>{
    console.log('async msg 1')
    ipc.send('async-message')
    console.log('async msg 2')
})

ipc.on('async-reply',(e,arg)=>{
    console.log(arg)
})

const syncBtn = document.getElementById('sync-Btn')
syncBtn.addEventListener('click',()=>{
    console.log('sync msg 1')
    const reply = ipc.sendSync('sync-message');
    console.log(reply)
    console.log('sync msg 2')
})

ipc.on('sync-reply',(e,arg)=>{
    console.log(arg)
})