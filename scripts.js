function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
}
function begone(chosenId){
        var element = document.getElementById(chosenId);
        element.style.top = "-200vh";
        sleep(3000).then(() => {
                document.getElementById("base").style.overflowY = "visible"
        });
}
function socialIn(){
        var elements = document.getElementsByClassName("social");
        alert(elements[0])
}
function spin(self, num){
        var element = document.getElementsByClassName(self)[num]
        element.style.rotate = "360deg"
        element.style.transitionDuration = "3s";
        sleep(3000).then(() => {
                element.style.rotate = "0deg";
        element.style.transitionDuration = "0s";
        });
}

function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                }
        }
        return "";
}


function checkEnabled(id, cname){
        var element = document.getElementById(id)
        string = getCookie(cname)
        if (string == "") {
                setCookie(cname, true, 10000)
        }
        console.log(string)
        if (string == "true"){
                element.style.display = "flex";
                document.getElementById("base").style.overflowY = "hidden"
        }
}

function swapEnabled(cname){
        string = getCookie(cname)
        if (string == "false"){
                setCookie(cname, true, 10000)
                console.log("poster is set to true")
        }
        else{
                setCookie(cname, false, 10000)
                console.log("poster is set to false")
                console.log(getCookie(cname))
        }
}