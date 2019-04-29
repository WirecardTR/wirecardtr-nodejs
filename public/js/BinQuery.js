document.getElementById("btnSubmit").addEventListener("click", function (e) {
    var bin = document.getElementsByName("bin")[0].value;
    
    if ( !bin  ) return alert("Eksik alanlar var !");

    var target = e.currentTarget;
    target.disabled = true;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "/api/BinQuery", true);
    ajax.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');  
    ajax.onload = function () {
        target.disabled = false
        console.log(ajax.response);
        document.getElementById("result").innerText =  vkbeautify.xml(ajax.response)
    }

    ajax.send(JSON.stringify({
        ServiceType: "MerchantQueries",
        OperationType:"BinQueryOperation",
        BIN:bin,
       
    }))
})