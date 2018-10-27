document.getElementById("btnSubmit").addEventListener("click", function (e) {

    var target = e.currentTarget;
    target.disabled = true;
    

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/WDTicketSaleURLProxy", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
         document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)  
        //  document.getElementById("link").innerHTML = (JSON.parse(ajax.response)).Result.RedirectUrl 
    
    }

    ajax.send(JSON.stringify({
        ServiceType: "WDTicket",
        OperationType:"SaleURLProxy"   ,
        Price:1,// 0.01 TL
        MPAY:"",
        CurrencyCode:"TRY",
        ErrorURL:"http://localhost:3000/Fail",
        SuccessURL:"http://localhost:3000/Success",
        ExtraParam:"",
        PaymentContent:"Bilgisayar",
        Description:"BLGSYR01"
    }))

   
    
})