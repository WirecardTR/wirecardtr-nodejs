const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var js2xmlparser = require("js2xmlparser");

/**
 * Url yöntemiyle kart saklama  xml servis çağrısının yapıldığı metodu temsil etmektedir.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * request alanlarına public/js/MarketPlaceWdTicketMpSale3DSecure.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * Response mesajı xml formatında ekranda gösterilmektedir.
 * @param {*} request 
 */
function CCTokenize(request) {
    return new Promise((resolve, reject) => {

        var obj={
            "ServiceType": request.ServiceType,
            "OperationType": request.OperationType,
            "Token": {
                "UserCode":settings.userCode,
                "Pin": settings.pin
            },
            "CustomerId": request.CustomerId,
            "CreditCardNumber":request.CreditCardNumber,
            "NameSurname":request.NameSurname,
            "ExpiryDate":request.ExpiryDate,
            "CVV":request.CVV,
            "Port":request.Port,
            "IPAddress": request.IPAddress,
            "ValidityPeriod": request.ValidityPeriod,
            
        }

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
module.exports = CCTokenize;