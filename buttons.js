AFRAME.registerComponent("create-buttons",{
    init:function(){
        var button1=document.createElement("button")
        button1.innerHTML="order summer"
        button1.setAttribute("id","ordered-button")
        button1.setAttribute("class","btn btn-danger ml-3")
        var button2=document.createElement("button")
        button2.innerHTML="order now"
        button2.setAttribute("id","order-button")
        button2.setAttribute("class","btn btn-danger ml-3 ml-3")
        var buttondiv=document.getElementById("button-div")
        buttondiv.appendChild(button1)
        buttondiv.appendChild(button2)

    }
    
})