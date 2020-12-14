$(document).ready(() => {

    //Theme set AUTO
    var themeLink = $("#theme")
    var archivoActual = localStorage.getItem("themeFile")
    if(archivoActual == null){
        archivoActual = "css/green.css"
    }
    themeLink.attr("href",archivoActual)
    //Theme Changer
    $("#togreen").click(() => {
        themeLink.attr("href","css/green.css")
        localStorage.setItem("themeFile","css/green.css")
    })
    $("#toblue").click(() => {
        themeLink.attr("href","css/blue.css")
        localStorage.setItem("themeFile","css/blue.css")
    })
    $("#tored").click(() => {
        themeLink.attr("href","css/redd.css")
        localStorage.setItem("themeFile","css/redd.css")
    })
    //Full Scrolls
    $("#goup").click(() => {
        $("html,body").animate({ scrollTop:0 }, 500)
    })
    $("#godown").click(() => {
        $("html, body").animate({ scrollTop: $(document).height() }, 500)
    })
    //UserNameMeeting show or not
    var formNameLS = localStorage.getItem("formName")
    if(formNameLS != null){
        $("#userNameMeeting").html(`Hola, ${formNameLS} <input type="button" id="autoDel" value="❌"/>`)
        $("#logout").show()
        $("#login").hide()
    }
    //Delete UserNameMeeting bar
    $("#userNameMeeting #autoDel").click(() => {
        $("#userNameMeeting").hide()
    })
    //Fake Login
    $("#login form").submit(() => {
        let bool =  $("#login form input[name='name']").val() != "" && 
                    $("#login form input[name='email']").val() != "" &&
                    $("#login form input[name='password']").val() != ""
        if(bool){
            var formName = $("#login form input[name='name']").val()
            localStorage.setItem("formName",formName)
        }else{
            $("#invalidLog").dialog()
            return false
        }
    })
    //Logout Functionality
    $("#logout").submit(() => {
        localStorage.removeItem("formName")
    })
  })