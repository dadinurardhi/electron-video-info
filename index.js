const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submitted', (event, path) => {
  console.log(path);
  ffmpeg.ffprobe(path, (err, metadata) => {
    console.log('File Length is: ', metadata.format.duration);
  });
});
