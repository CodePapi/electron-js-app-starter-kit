
       const electron = require("electron")
        const {ipcRenderer} =electron

        const form = document.querySelector("form")
    

        const submitForm=(e)=>{
            e.preventDefault()
            let item = document.querySelector("#item").value
            console.log(item)
            ipcRenderer.send("item:add", item)
            document.querySelector("#item").value=""
        
        }
        form.addEventListener("submit", submitForm)