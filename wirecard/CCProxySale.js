const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var js2xmlparser = require("js2xmlparser");

/**
 * Kredi kartı ile Ödeme formu xml servis çağrısının yapıldığı metodu temsil etmektedir.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * request alanlarına public/js/CCProxySale.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * Response mesajı xml formatında ekranda gösterilmektedir.
 * @param {*} request 
 */
function CCProxySale(request) {
    return new Promise((resolve, reject) => {

        var obj={
            "ServiceType": request.ServiceType,
            "OperationType": request.OperationType,
            "Token": {
                "UserCode":settings.userCode,
                "Pin": settings.pin
            },
            "CreditCardInfo": {
                "CreditCardNo": request.CreditCardInfoCreditCardNo,
                "OwnerName": request.CreditCardInfoOwnerName,
                "ExpireYear": request.CreditCardInfoExpireYear,
                "ExpireMonth": request.CreditCardInfoExpireMonth,
                "Cvv": request.CreditCardInfoCvv,
                "Price": request.CreditCardInfoPrice,
            },
            "CardTokenization": {
                "RequestType": request.CardTokenizationRequestType,
                "CustomerId": request.CardTokenizationCustomerId,
                "ValidityPeriod": request.CardTokenizationValidityPeriod,
                "CCTokenId": "",
            },
            "Port": request.Port,
            "MPAY": request.MPAY,
            "CurrencyCode": request.CurrencyCode,
            "ExtraParam": request.ExtraParam,
            "Description":request.Description,
            "IPAddress": request.IPAddress,
            "InstallmentCount": request.InstallmentCount,
            "PaymentContent": request.PaymentContent
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
module.exports = CCProxySale;