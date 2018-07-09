document.getElementById("btnSubmit").addEventListener("click", function (e) {
   
   
    var customerId=document.getElementsByName("customerId")[0].value;
  
    if (!customerId || !price) return alert("Eksik alanlar var !");

    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/app/UrlCCTokenize", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        console.log(ajax.response);
        document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({
        ServiceType: "WDTicket",
        OperationType:"TokenizeCCURL",
        CustomerId:customerId,
        ValidityPeriod:"20",
        IPAddress:"",
        ErrorURL:"http://localhost:3000/tokenizefail",
        SuccessURL:"http://localhost:3000/tokenizesuccess"
    }))
})