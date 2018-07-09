document.getElementById("btnSubmit").addEventListener("click", function (e) {
   
   
    var subScriberId=document.getElementsByName("subscriberId")[0].value;
    var price=document.getElementsByName("price")[0].value;
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 1);
   
    if (!subScriberId || !price) return alert("Eksik alanlar var !");

    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/SubScriberChangePrice", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        console.log(ajax.response);
        document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({
        ServiceType: "SubscriberManagementService",
        OperationType:"ChangePriceBySubscriber",
        Price:price,
        SubscriberId:subScriberId, 
        ValidFrom:"20190703",
        Description:"Ucret Degisimi"
    }))
})