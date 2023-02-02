
const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {

    const newWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    newWindow.loadFile("index.html")

})
