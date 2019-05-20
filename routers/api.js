const express = require("express");
const axios = require("axios");
const parseString = require('xml2js').parseString;
const Guid = require("guid");
var soap = require('soap');

const helpers = require("../helpers/index");
const settings = require("../settings");
const wirecard = require("../wirecard/index");

exports.api = express.Router();

exports.api
.post("/SendInformationSmsService", (req, res) => {
     wirecard.SendInformationSmsService(req.body.gsm,req.body.content).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/MarketPlaceDeactiveSubPartner", (req, res) => {
    
    console.log(req);
       wirecard.MarketPlaceDeactiveSubPartner(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/ProApi", (req, res) => {
    console.log(req);
       wirecard.ProApi(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/ApiPlus", (req, res) => {
    console.log(req);
       wirecard.ApiPlus(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/SelectSubscriber", (req, res) => {
    console.log(req);
       wirecard.SelectSubscriber(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/SelectSubscriberDetail", (req, res) => {
    console.log(req);
       wirecard.SelectSubscriberDetail(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/DeactivateSubscriber", (req, res) => {
    console.log(req);
       wirecard.DeactivateSubscriber(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/MarketPlaceAddSubPartner", (req, res) => {
    console.log(req);
       wirecard.MarketPlaceAddSubPartner(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/BinQuery", (req, res) => {
    console.log(req);
       wirecard.BinQuery(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/MarketPlaceCreateSubPartner", (req, res) => {
    console.log(req);
       wirecard.MarketPlaceCreateSubPartner(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/MarketPlaceAddSubPartnerOnlineVerify", (req, res) => {
    console.log(req);
       wirecard.MarketPlaceAddSubPartnerOnlineVerify(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/MarketPlaceUpdateSubPartner", (req, res) => {
    console.log(req);
       wirecard.MarketPlaceUpdateSubPartner(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/MarketPlaceUpdateSubPartnerOnlineVerify", (req, res) => {
    console.log(req);
       wirecard.MarketPlaceUpdateSubPartnerOnlineVerify(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/MarketPlaceSale3DSec", (req, res) => {
    console.log(req);
       wirecard.MarketPlaceSale3DSec(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/MarketPlaceMpSale", (req, res) => {
    console.log(req);
       wirecard.MarketPlaceMpSale(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/MarketPlaceWdTicketMpSale3DSecure", (req, res) => {
    console.log(req);
       wirecard.MarketPlaceWdTicketMpSale3DSecure(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/MarketPlaceReleasePayment", (req, res) => {
    console.log(req);
       wirecard.MarketPlaceReleasePayment(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/CCProxySale", (req, res) => {
    console.log(req);
       wirecard.CCProxySale(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/CCProxySale3D", (req, res) => {
    console.log(req);
       wirecard.CCProxySale3D(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/WDTicketSale3DURLProxy", (req, res) => {
    console.log(req);
       wirecard.WDTicketSale3DURLProxy(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})

.post("/WDTicketSaleURLProxy", (req, res) => {
    console.log(req);
       wirecard.WDTicketSaleURLProxy(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/TransactionQueryByOrderId", (req, res) => {
    console.log(req);
       wirecard.TransactionQueryByOrderId(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/TransactionQueryByMPAY", (req, res) => {
    console.log(req);
       wirecard.TransactionQueryByMPAY(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})
.post("/SubScriberChangePrice", (req, res) => {
    console.log(req);
       wirecard.SubScriberChangePrice(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})



.post("/UrlCCTokenize", (req, res)=>{
    console.log(req);
       wirecard.UrlCCTokenize(req.body).then(requestResult => {
        res.json(requestResult)
    }).catch(err => {
        console.log(err)
    })
})


