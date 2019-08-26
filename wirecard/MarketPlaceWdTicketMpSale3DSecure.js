const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var js2xmlparser = require("js2xmlparser");

/**
 * Pazaryeri Wirecard ortak ödeme 3D secure ile ödeme xml servis çağrısının yapıldığı metodu temsil etmektedir.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * request alanlarına public/js/MarketPlaceWdTicketMpSale3DSecure.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * Response mesajı xml formatında ekranda gösterilmektedir.
 * @param {*} request 
 */
function MarketPlaceWdTicketMpSale3DSecure(request) {
    return new Promise((resolve, reject) => {

        var obj={
            "ServiceType": request.ServiceType,
            "OperationType": request.OperationType,
            "Token": {
                "UserCode":settings.userCode,
                "Pin": settings.pin
            },
            "CustomerInfo": {
                "CustomerName": request.CustomerName,
                "CustomerSurname": request.CustomerSurname,
                "CustomerEmail": request.CustomerEmail,
            },
            "CommissionRateList":{
                "Inst0":request.Inst0,
                "Inst3":request.Inst3,
                "Inst6":request.Inst6,
                "Inst9":request.Inst9
            },
            "Language": request.Language,
            "MPAY": request.Mpay,
            "CurrencyCode": request.CurrencyCode,
            "InstallmentOptions": request.InstallmentOptions,
            
            "ExtraParam": request.ExtraParam,
            "Description":request.Description,
            "ErrorURL": request.ErrorURL,
            "SuccessURL": request.SuccessURL,
            "Price":request.Price,
            "CommissionRate": request.CommissionRate,
            "SubPartnerId": request.SubPartnerId,
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
module.exports = MarketPlaceWdTicketMpSale3DSecure;