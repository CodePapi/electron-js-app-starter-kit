const electron = require("electron");
const path = require("path");
const url = require("url");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

//listen for app to be ready
app.on("ready", function () {
  //create new window
  mainWindow = new BrowserWindow({});
  //Load html files into the window
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "mainScreen.html"),
      protocol: "file",
      slashes: true,
    })
  );

  //quit main window and close all
  mainWindow.on("closed", function () {
    app.quit();
  });
  //build menu from template

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //insert the menu
  Menu.setApplicationMenu(mainMenu);
});

//handle create add window
const createAddeWindow = () => {
  //create new window
  addWindow = new BrowserWindow({
    width: 400,
    height: 400,
    title: "Second Screen",
  });
  //Load html files into the window
  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "SecondScreen.html"),
      protocol: "file",
      slashes: true,
    })
  );
  //garbage collection handle
  addWindow.on("close", function () {
    addWindow = null;
  });
};

//create menu template
const mainMenuTemplate = [
  {
    label: "Menu",
    submenu: [
      {
        label: "Second Screen",
        click() {
          createAddeWindow();
        },
      },
      {
        label: "Add Screen",
      },
      {
        label: "Add Screen",
      },
      {
        label: "Add Screen",
      },
      {
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
        label: "Quit",
        click() {
          app.quit();
        },
      },
    ],
  },
  {
      label:"Add Menu"
  },
  {
    label:"Add Menu"
}
];
// if mac, add empty object area
if (process.platform === "darwin") {
  mainMenuTemplate.unshift({});
}

//dev tools if development mode
if (process.env.NODE_ENV !== "production") {
  mainMenuTemplate.push({
    accelerator: process.platform === "darwin" ? "Command+I" : "Ctrl+I",
    label: "Developer Tools",
    submenu: [
      {
        label: "Toggle DevTools",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: "reload",
      },
      {
        label: "Add Screen",
      },

      {
        label: "Add Screen",
      },
      {
        label: "Add Screen",
      },
    ],
  });
}
