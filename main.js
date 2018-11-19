const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

//Listen For Things
app.on('ready', function(){
    //Crate Window
    mainWindow = new BrowserWindow({
        minimizable: false,
        fullscreen: true,
     });
    //Load The HTML Files
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'login.html'),
        protocol: 'file:',
        slashes: true
    }));
    //Build a Menu
    const MainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Menu Insertion
    Menu.setApplicationMenu(MainMenu);
});

// Menu Making Shit
const mainMenuTemplate = [
    {
        label: 'System',
        submenu: [
            {
                label: 'ShutDown',
                click(){
                    app.quit();
                }
            },
            {
                label: 'Restart',
                click(){
                    app.relaunch();
                }
            },
            {
                label: 'Sign Out',
                click(){
                    mainWindow.loadURL(url.format({
                        pathname: path.join(__dirname, 'login.html'),
                        protocol: 'file:',
                        slashes: true
                    }));
                }
            }
        ]
    }
];