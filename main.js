const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            // preload: path.join(__dirname, 'preload.js')
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, `angular_build/index.html`),
        protocol: "file:",
        slashes: true
    })); 
};

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

