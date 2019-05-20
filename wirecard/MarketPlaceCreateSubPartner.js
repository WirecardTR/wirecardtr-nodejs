const axios = require("axios");
const settings = require("../settings");
const helpers = require("../helpers/index");
const Guid = require("guid");
const soap = require('soap');
var js2xmlparser = require("js2xmlparser");

/**
 * Pazaryeri oluşturma xml servis çağrısının yapıldığı metodu temsil etmektedir.
 * Bu metodun request parametresi form içerisinden girilen değerleri temsil etmektedir.
 * request alanlarına public/js/MarketPlaceAddSubPartner.js içerisinden ulaşabilirsiniz.
 * Post işlemi routers/api.js dosyası içerisinden yapılmaktadır.
 * Response mesajı xml formatında ekranda gösterilmektedir. 
 * @param {*} request 
 */
function MarketPlaceCreateSubPartner(request) {
    return new Promise((resolve, reject) => {

        var obj= {
        "ServiceType": request.ServiceType,
		"OperationType": request.OperationType,
		"Token": {
			"UserCode": settings.userCode,
            "Pin": settings.pin
		},
		"UniqueId": request.UniqueId,
		"SubPartnerType": request.SubPartnerType,
		
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
module.exports = MarketPlaceCreateSubPartner;