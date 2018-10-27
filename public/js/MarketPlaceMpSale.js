document.getElementById("btnSubmit").addEventListener("click", function (e) {
   
    var creditCardNo=document.getElementsByName("creditCardNo")[0].value;
    var ownerName=document.getElementsByName("ownerName")[0].value;
    var expireYear=document.getElementsByName("expireYear")[0].value;
    var expireMonth=document.getElementsByName("expireMonth")[0].value;
    var cvv=document.getElementsByName("cvv")[0].value;
    var installmentCount=document.getElementsByName("installmentCount")[0].value;
    var subPartnerId=document.getElementsByName("subPartnerId")[0].value;
    var currencyCode=document.getElementsByName("currencyCode")[0].value;
   
    if (!creditCardNo || !ownerName || !expireYear || !expireMonth || !cvv || !installmentCount || !subPartnerId ) return alert("Eksik alanlar var !");

    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/MarketPlaceMpSale", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        console.log(ajax.response);
        document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({
        ServiceType: "CCMarketPlace",
        OperationType:"MPSale",
        CreditCardInfoCreditCardNo:creditCardNo,
        CreditCardInfoOwnerName:ownerName,
        CreditCardInfoExpireYear:expireYear,
        CreditCardInfoExpireMonth:expireMonth,
        CreditCardInfoCvv:cvv,
        CardTokenizationRequestType:0,
        CardTokenizationCustomerId:"1",
        CardTokenizationValidityPeriod:0,
        Price:1,//0,01 TL,
        Mpay:"01",
        CurrencyCode:currencyCode,
        ExtraParam:"",
        Description:"Bilgisayar",
        IPAddress:"127.0.0.1",
        Port:"01",
        ErrorURL:"http://localhost:3000//Fail",
        SuccessURL:"http://localhost:3000//Success",
        InstallmentCount:installmentCount,
        CommissionRate:1, //%1
        SubPartnerId:subPartnerId, 
        PaymentContent:"BLGSYR01"
    }))
})