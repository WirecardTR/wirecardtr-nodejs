

document.getElementById("btnSubmit").addEventListener("click", function (e) {
 
  
    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/WDTicketSale3DURLProxy", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        console.log(ajax.response); 
        document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)
        //
    }

    ajax.send(JSON.stringify({
        ServiceType: "WDTicket",
        OperationType:"Sale3DSURLProxy"   ,
        Price:1,// 0.01 TL
        MPAY:"",
        CurrencyCode:"TRY",
        ErrorURL:"http://localhost:3000/Fail",
        SuccessURL:"http://localhost:3000/Success",
        ExtraParam:"",
        PaymentContent:"Bilgisayar",
        Description:"BLGSYR01"
    }))

    // js2xmlparser.parseString(ajax.response, function (err, result) {
    //     console.log(JSON.stringify(result));
    //     var link=result.RedirectUrl;
    //     console.log(link);
    // });
})