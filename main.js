const electron = require("electron")
const path = require("path")
const url=require("url")

const{app, BrowserWindow, Menu}=electron

let mainWindow

//listen for app to be ready
app.on('ready', function(){
    //create new window
    mainWindow= new BrowserWindow({

    })
    //Load html files into the window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "mainWindow.html"),
        protocol:"file",
        slashes:true
    }))

    //quit main window and close all
    mainWindow.on("closed", function(){
        app.quit()
    })
//build menu from template

const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
//insert the menu
Menu.setApplicationMenu(mainMenu)
})



//handle create add window
const createAddeWindow=()=>{
        //create new window
        addWindow= new BrowserWindow({
            width:300,
            height:200,
            title:"Shopping List Items"
        })
        //Load html files into the window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, "addWindow.html"),
        protocol:"file",
        slashes:true
    }))
}


//create menu template
const mainMenuTemplate = [{
    label:'File',
    submenu:[{
        label:"Add Item",
        click(){
            createAddeWindow()
        }
    },{
        label:"ClearItems"
    },
    {
        accelerator:process.platform==="darwin"?"Command+Q":"Ctrl+Q",
        label:"Quit",
        click(){
            app.quit()
        }
    },

]
},
{
    label:'Edit'
}]