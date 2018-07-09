document.getElementById("btnSubmit").addEventListener("click", function (e) {
   
   
    var customerId=document.getElementsByName("customerId")[0].value;
    var creditCardNumber=document.getElementsByName("creditCardNumber")[0].value;
    var nameSurname=document.getElementsByName("nameSurname")[0].value;
    var expiryDate=document.getElementsByName("expireMonth")[0].value +"/"+document.getElementsByName("expireYear")[0].value;
    var cvv=document.getElementsByName("cvv")[0].value
    if (!customerId || !creditCardNumber ||!nameSurname ||!expiryDate ||!cvv) return alert("Eksik alanlar var !");

    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/CCTokenize", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        console.log(ajax.response);
        document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({
        ServiceType: "CCTokenizationService",
        OperationType:"TokenizeCC",
        NameSurname:nameSurname,
        ExpiryDate:expiryDate,
        CVV:cvv,
        CreditCardNumber:creditCardNumber,
        Port="",
        CustomerId:customerId,
        ValidityPeriod:"20",
        IPAddress:""
    }))
})