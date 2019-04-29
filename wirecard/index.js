const ApiPlus = require("./ApiPlus");
const ProApi = require("./ProApi");
const SendInformationSmsService = require("./SendInformationSmsService");
const SelectSubscriber = require("./SelectSubscriber");
const SelectSubscriberDetail = require("./SelectSubscriberDetail");
const DeactivateSubscriber  = require("./DeactivateSubscriber");
const CCProxySale = require("./CCProxySale");
const CCProxySale3D = require("./CCProxySale3D");
const WDTicketSale3DURLProxy = require("./WDTicketSale3DURLProxy");
const WDTicketSaleURLProxy = require("./WDTicketSaleURLProxy");
const MarketPlaceAddSubPartner = require("./MarketPlaceAddSubPartner");
const MarketPlaceAddSubPartnerOnlineVerify = require("./MarketPlaceAddSubPartnerOnlineVerify");
const MarketPlaceUpdateSubPartner = require("./MarketPlaceUpdateSubPartner");
const MarketPlaceUpdateSubPartnerOnlineVerify = require("./MarketPlaceUpdateSubPartnerOnlineVerify");
const MarketPlaceDeactiveSubPartner = require("./MarketPlaceDeactiveSubPartner");
const MarketPlaceSale3DSec = require("./MarketPlaceSale3DSec");
const MarketPlaceMpSale = require("./MarketPlaceMpSale");
const MarketPlaceReleasePayment = require("./MarketPlaceReleasePayment");
const TransactionQueryByOrderId = require("./TransactionQueryByOrderId");
const TransactionQueryByMPAY = require("./TransactionQueryByMPAY");
const MarketPlaceWdTicketMpSale3DSecure = require("./MarketPlaceWdTicketMpSale3DSecure");
const SubScriberChangePrice = require("./SubScriberChangePrice");
const UrlCCTokenize= require("./UrlCCTokenize");
const CCTokenize = require("./CCTokenize");
const BinQuery = require("./BinQuery");




module.exports = { 
    ApiPlus:ApiPlus,
    ProApi:ProApi,
    SelectSubscriber:SelectSubscriber,
    SelectSubscriberDetail:SelectSubscriberDetail,
    DeactivateSubscriber : DeactivateSubscriber,
    CCProxySale : CCProxySale,
    CCProxySale3D : CCProxySale3D,
    WDTicketSale3DURLProxy : WDTicketSale3DURLProxy,
    WDTicketSaleURLProxy : WDTicketSaleURLProxy,
    MarketPlaceUpdateSubPartner : MarketPlaceUpdateSubPartner,
    MarketPlaceUpdateSubPartnerOnlineVerify : MarketPlaceUpdateSubPartnerOnlineVerify,
    MarketPlaceAddSubPartner : MarketPlaceAddSubPartner,
    MarketPlaceAddSubPartnerOnlineVerify : MarketPlaceAddSubPartnerOnlineVerify,
    SendInformationSmsService : SendInformationSmsService,
    MarketPlaceDeactiveSubPartner:MarketPlaceDeactiveSubPartner,
    MarketPlaceSale3DSec:MarketPlaceSale3DSec,
    MarketPlaceMpSale:MarketPlaceMpSale,
    MarketPlaceReleasePayment:MarketPlaceReleasePayment,
    TransactionQueryByOrderId:TransactionQueryByOrderId,
    TransactionQueryByMPAY:TransactionQueryByMPAY,
    MarketPlaceWdTicketMpSale3DSecure:MarketPlaceWdTicketMpSale3DSecure,
    SubScriberChangePrice:SubScriberChangePrice,
    UrlCCTokenize:UrlCCTokenize,
    BinQuery : BinQuery,
    CCTokenize:CCTokenize

}