document.getElementById("btnSubmit").addEventListener("click", function (e) {
    var subPartnerType = document.getElementsByName("subPartnerType")[0].value;
    
    var date= new Date().toISOString().slice(0,10); 
    if (!subPartnerType ) return alert("Eksik alanlar var !");

    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/MarketPlaceCreateSubPartner", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        console.log(ajax.response);
        document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({
        ServiceType: "WDTicket",
        OperationType:"CreateSPRegistrationURL",
        UniqueId:"5000",
        SubPartnerType:subPartnerType,
        
    }))
})