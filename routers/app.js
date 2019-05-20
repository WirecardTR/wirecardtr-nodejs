const express = require("express");

const axios = require("axios");
const parseString = require('xml2js').parseString;
const Guid = require("guid");
const crypto = require("crypto");
const helpers = require("../helpers/index");

const object2XML = require("../helpers/Object2XML");
const settings = require("../settings");
const wirecard = require("../wirecard/index");
exports.app = express.Router();

exports.app
.get('/', (req, res) => {
    res.render("index")
})
.get('/MarketPlaceDeactiveSubPartner', (req, res) => {
    res.render("MarketPlaceDeactiveSubPartner")
})

.get("/SendInformationSmsService", (req, res)=>{
    res.render("SendInformationSmsService", {
    
    })
})
.get("/ProApi", (req, res)=>{
    res.render("ProApi", {
    
    })
})
.get("/ApiPlus", (req, res)=>{
    res.render("ApiPlus", {
    
    })
})
.get("/SelectSubscriber", (req, res)=>{
    res.render("SelectSubscriber", {
    
    })
})
.get("/SelectSubscriberDetail", (req, res)=>{
    res.render("SelectSubscriberDetail", {
    
    })
})
.get("/DeactivateSubscriber", (req, res)=>{
    res.render("DeactivateSubscriber", {
    
    })
})
.get("/CCProxySale", (req, res)=>{
    res.render("CCProxySale", {
    
    })
})
.get("/CCProxySale3D", (req, res)=>{
    res.render("CCProxySale3D", {
    
    })
})
.get("/MarketPlaceAddSubPartner", (req, res)=>{
    res.render("MarketPlaceAddSubPartner", {
    
    })
})
.get("/BinQuery", (req, res)=>{
    res.render("BinQuery", {
    
    })
})
.get("/MarketPlaceCreateSubPartner", (req, res)=>{
    res.render("MarketPlaceCreateSubPartner", {
    
    })
})
.get("/MarketPlaceAddSubPartnerOnlineVerify", (req, res)=>{
    res.render("MarketPlaceAddSubPartnerOnlineVerify", {
    
    })
})
.get("/MarketPlaceUpdateSubPartner", (req, res)=>{
    res.render("MarketPlaceUpdateSubPartner", {
    
    })
})
.get("/MarketPlaceUpdateSubPartnerOnlineVerify", (req, res)=>{
    res.render("MarketPlaceUpdateSubPartnerOnlineVerify", {
    
    })
})
.get("/MarketPlaceSale3DSec", (req, res)=>{
    res.render("MarketPlaceSale3DSec", {
    
    })
})
.get("/MarketPlaceMpSale", (req, res)=>{
    res.render("MarketPlaceMpSale", {
    
    })
})
.get("/MarketPlaceWdTicketMpSale3DSecure", (req, res)=>{
    res.render("MarketPlaceWdTicketMpSale3DSecure", {
    
    })
})



.get("/MarketPlaceReleasePayment", (req, res)=>{
    res.render("MarketPlaceReleasePayment", {
    
    })
})
.get("/WDTicketSale3DURLProxy", (req, res)=>{
    res.render("WDTicketSale3DURLProxy", {
    
    })
})
.get("/WDTicketSaleURLProxy", (req, res)=>{
    res.render("WDTicketSaleURLProxy", {
    
    })
})
.get("/TransactionQueryByOrderId", (req, res)=>{
    res.render("TransactionQueryByOrderId", {
    
    })
})
.get("/TransactionQueryByMPAY", (req, res)=>{
    res.render("TransactionQueryByMPAY", {
    
    })
})
.get("/SubScriberChangePrice", (req, res)=>{
    res.render("SubScriberChangePrice", {
    
    })
})
.get("/CCTokenize", (req, res)=>{
    res.render("CCTokenize", {
    
    })
})
.get("/UrlCCTokenize", (req, res)=>{
    res.render("UrlCCTokenize", {
    
    })
})
.get("/Success", (req, res)=>{
    
    res.render("Success", {
    
    })
})
.get("/Fail", (req, res)=>{
    res.render("Fail", {
    
    })
})

.post("/CCTokenize", (req, res) => {
    console.log(req);
       wirecard.CCTokenize(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})

 .post("/fail", (req, res)=>{
    var body = object2XML(req.body, "authResponse");
    console.log(req.body);
    res.render("fail", {
        status: "İşlem Başarısız",
        results: body
    })
 })
 .post("/success", (req, res)=>{
    var body = object2XML(req.body, "authResponse");
    console.log(req.body);
    var settingHashKey=settings.hashKey;
    var hashText =req.body.StatusCode+req.body.LastTransactionDate+req.body.MPAY+req.body.OrderId+settingHashKey;
    const hashedText = crypto.createHash('sha1').update(hashText, 'iso-8859-9').digest('base64');
    if(req.body.HashParam==hashedText)
    {
        console.log("Gelen Hash değerinin doğru hesaplanmış olması işlem güvenliği açısından önemlidir !");
    }
    res.render("success", {
        status: "İşlem Başarılı",
        results: body
    })
 })
