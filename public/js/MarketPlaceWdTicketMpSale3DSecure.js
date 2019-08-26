document.getElementById("btnSubmit").addEventListener("click", function (e) {
   
   
    var subPartnerId=document.getElementsByName("subPartnerId")[0].value;
    var currencyCode=document.getElementsByName("currencyCode")[0].value;
    
    if (!subPartnerId ) return alert("Eksik alanlar var !");

    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/MarketPlaceWdTicketMpSale3DSecure", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        console.log(ajax.response);
        document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({
        ServiceType: "WDTicket",
        OperationType:"MPSale3DSECWithUrl",
        Mpay:"",
        CurrencyCode:currencyCode,
        ExtraParam:"",
        Description:"Bilgisayar",
        ErrorURL:"http://localhost:3000/Fail",
        SuccessURL:"http://localhost:3000/Success",
        CommissionRate:100, //%1
        Price:1,//0,01 TL
        SubPartnerId:subPartnerId, 
        PaymentContent:"BLGSYR01",
        CustomerName:"ahmet",
        CustomerSurname:"yılmaz",
        CustomerEmail:"ahmet.yilmaz@gmail.com",
        Language:"TR",
        InstallmentOptions:0,
        Inst0:110,
        Inst3:130,
        Inst6:160,
        Inst9:190
        
        
        
        
    }))
})