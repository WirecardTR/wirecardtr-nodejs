const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var js2xmlparser = require("js2xmlparser");

/**
 * Pazaryeri 3D secure olmadan ödeme xml servis çağrısının yapıldığı metodu temsil etmektedir.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * request alanlarına public/js/MarketPlaceMpSale.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * Response mesajı xml formatında ekranda gösterilmektedir. 
 * @param {*} request 
 */
function MarketPlaceMpSale(request) {
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
                "Cvv": request.CreditCardInfoCvv
            },
            "CardTokenization": {
                "RequestType": request.CardTokenizationRequestType,
                "CustomerId": request.CardTokenizationCustomerId,
                "ValidityPeriod": request.CardTokenizationValidityPeriod,
                "CCTokenId": "",
            },
            "Price": request.Price,
            "MPAY": request.Mpay,
            "CurrencyCode": request.CurrencyCode,
            "ExtraParam": request.ExtraParam,
            "Description":request.Description,
            "IPAddress": request.IPAddress,
            "Port": request.Port,
            "ErrorURL": request.ErrorURL,
            "SuccessURL": request.SuccessURL,
            "InstallmentCount": request.InstallmentCount,
            "CommissionRate": request.CommissionRate,
            "SubPartnerId": request.SubPartnerId,
            "PaymentContent": request.PaymentContent
        }

        var xml_body = js2xmlparser.parse("WIRECARD", obj);
		console.log(xml_body);	
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
module.exports = MarketPlaceMpSale;