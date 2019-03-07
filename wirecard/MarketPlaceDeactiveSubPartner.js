const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var js2xmlparser = require("js2xmlparser");

/**
 * Pazaryeri Üye işyeri silme xml servis çağrısının yapıldığı metodu temsil etmektedir.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * request alanlarına public/js/MarketPlaceDeactiveSubPartner.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * response mesajı xml formatında ekranda gösterilmektedir. 
 */
function MarketPlaceDeactiveSubPartner(request) {
    return new Promise((resolve, reject) => {
        console.log("dafdaf");
        console.log(request);

        var obj = {
            "ServiceType": request.ServiceType,
            "OperationType": request.OperationType,
            "UniqueId": request.UniqueId,
            "Token": {
                "UserCode": settings.userCode,
                "Pin": settings.pin
            }
        };

        var xml_body = js2xmlparser.parse("WIRECARD", obj);
        console.log(xml_body);



        process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
        axios({
            url: settings.baseURL,
            method: 'POST',
            data: xml_body
        }).then(result => {
            console.log(result.data);
            resolve(result.data)
        }).catch(err => {
            reject(err)
        })


    })

}
module.exports = MarketPlaceDeactiveSubPartner;