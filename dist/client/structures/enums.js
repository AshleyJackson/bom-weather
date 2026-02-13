"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadarRegions = exports.Cities = void 0;
var Cities;
(function (Cities) {
    Cities["BRISBANE"] = "r7hgdm";
    Cities["SYDNEY"] = "r3gx2s";
    Cities["CANBERRA"] = "r3dp5h";
    Cities["HOBART"] = "r22u08";
    Cities["PERTH"] = "qd66hr";
    Cities["DARWIN"] = "qvv117";
    Cities["ADELAIDE"] = "r1f93c";
    Cities["MELBOURNE"] = "r1r0fu";
})(Cities || (exports.Cities = Cities = {}));
var RadarRegions;
(function (RadarRegions) {
    // New South Wales / ACT
    RadarRegions["NSW_BREWARRINA"] = "IDR933";
    RadarRegions["NSW_CANBERRA_CAPTAINS_FLAT"] = "IDR403";
    RadarRegions["NSW_GRAFTON"] = "IDR283";
    RadarRegions["NSW_HILLSTON"] = "IDR943";
    RadarRegions["NSW_MOREE"] = "IDR533";
    RadarRegions["NSW_NAMOI_BLACKJACK_MOUNTAIN"] = "IDR693";
    RadarRegions["NSW_NEWCASTLE"] = "IDR043";
    RadarRegions["NSW_SYDNEY_TERREY_HILLS"] = "IDR713";
    RadarRegions["NSW_WAGGA_WAGGA"] = "IDR553";
    RadarRegions["NSW_WOLLONGONG_APPIN"] = "IDR033";
    RadarRegions["NSW_YEOVAL"] = "IDR963";
    RadarRegions["NSW_NORFOLK_ISLAND"] = "IDR623";
    // Victoria
    RadarRegions["VIC_BAIRNSDALE"] = "IDR683";
    RadarRegions["VIC_MELBOURNE"] = "IDR023";
    RadarRegions["VIC_MILDURA"] = "IDR973";
    RadarRegions["VIC_RAINBOW"] = "IDR953";
    RadarRegions["VIC_YARRAWONGA"] = "IDR493";
    // Queensland
    RadarRegions["QLD_BOWEN"] = "IDR243";
    RadarRegions["QLD_BRISBANE_MARBURG"] = "IDR503";
    RadarRegions["QLD_BRISBANE_MT_STAPYLTON"] = "IDR663";
    RadarRegions["QLD_CAIRNS"] = "IDR193";
    RadarRegions["QLD_EMERALD"] = "IDR723";
    RadarRegions["QLD_GLADSTONE"] = "IDR233";
    RadarRegions["QLD_GREENVALE"] = "IDR743";
    RadarRegions["QLD_GULF_MORNINGTON_ISLAND"] = "IDR363";
    RadarRegions["QLD_GYMPIE_MT_KANIGAN"] = "IDR083";
    RadarRegions["QLD_LONGREACH"] = "IDR563";
    RadarRegions["QLD_MACKAY"] = "IDR223";
    RadarRegions["QLD_MOUNT_ISA"] = "IDR753";
    RadarRegions["QLD_RICHMOND"] = "IDR1073";
    RadarRegions["QLD_TAROOM"] = "IDR983";
    RadarRegions["QLD_TOOWOOMBA"] = "IDR1083";
    RadarRegions["QLD_TOWNSVILLE"] = "IDR1063";
    RadarRegions["QLD_WARREGO"] = "IDR673";
    RadarRegions["QLD_WEIPA"] = "IDR783";
    RadarRegions["QLD_WILLIS_ISLAND"] = "IDR413";
    // South Australia
    RadarRegions["SA_ADELAIDE_BUCKLAND_PARK"] = "IDR643";
    RadarRegions["SA_ADELAIDE_SELLICKS_HILL"] = "IDR463";
    RadarRegions["SA_CEDUNA"] = "IDR333";
    RadarRegions["SA_MOUNT_GAMBIER"] = "IDR143";
    RadarRegions["SA_WOOMERA"] = "IDR273";
    // Western Australia
    RadarRegions["WA_ALBANY"] = "IDR313";
    RadarRegions["WA_BROOME"] = "IDR173";
    RadarRegions["WA_CARNARVON"] = "IDR1143";
    RadarRegions["WA_DAMPIER"] = "IDR343";
    RadarRegions["WA_ESPERANCE"] = "IDR353";
    RadarRegions["WA_GERALDTON"] = "IDR363";
    RadarRegions["WA_GILES"] = "IDR383";
    RadarRegions["WA_HALLS_CREEK"] = "IDR393";
    RadarRegions["WA_KALGOORLIE"] = "IDR403";
    RadarRegions["WA_LEARMONTH"] = "IDR293";
    RadarRegions["WA_NEWDEGATE"] = "IDR313";
    RadarRegions["WA_PERTH_SERPENTINE"] = "IDR703";
    RadarRegions["WA_PORT_HEDLAND"] = "IDR323";
    RadarRegions["WA_SOUTH_DOODLAKINE"] = "IDR363";
    RadarRegions["WA_WATHEROO"] = "IDR373";
    // Northern Territory
    RadarRegions["NT_ALICE_SPRINGS"] = "IDR253";
    RadarRegions["NT_DARWIN_BERRIMAH"] = "IDR633";
    RadarRegions["NT_GOVE"] = "IDR1123";
    RadarRegions["NT_KATHERINE_TINDAL"] = "IDR423";
    RadarRegions["NT_WARRUWI"] = "IDR773";
    // Tasmania
    RadarRegions["TAS_HOBART_MT_KOONYA"] = "IDR763";
    RadarRegions["TAS_WEST_TAKONE"] = "IDR523";
    // Legacy aliases for backward compatibility
    /** @deprecated Use NSW_SYDNEY_TERREY_HILLS instead */
    RadarRegions["SYDNEY_TERREY_HILLS"] = "IDR713";
    /** @deprecated Use NSW_WOLLONGONG_APPIN instead */
    RadarRegions["SYDNEY_WOLLONGONG"] = "IDR033";
    /** @deprecated Use VIC_MELBOURNE instead */
    RadarRegions["MELBOURNE"] = "IDR023";
    /** @deprecated Use QLD_BRISBANE_MT_STAPYLTON instead */
    RadarRegions["BRISBANE_MARBURG"] = "IDR663";
    /** @deprecated Use SA_ADELAIDE_BUCKLAND_PARK instead */
    RadarRegions["ADELAIDE_BUCKLAND_PARK"] = "IDR643";
    /** @deprecated Use SA_WOOMERA instead (corrected code) */
    RadarRegions["ADELAIDE_WOOMERA"] = "IDR273";
    /** @deprecated Use WA_PERTH_SERPENTINE instead */
    RadarRegions["PERTH"] = "IDR703";
    /** @deprecated Use NT_DARWIN_BERRIMAH instead */
    RadarRegions["DARWIN_BERRIMAH"] = "IDR633";
    /** @deprecated Use NSW_CANBERRA_CAPTAINS_FLAT instead */
    RadarRegions["CANBERRA_CAPTAINS_FLAT"] = "IDR403";
    /** @deprecated Use TAS_HOBART_MT_KOONYA instead */
    RadarRegions["HOBART"] = "IDR763";
    /** @deprecated Use NSW_NEWCASTLE instead */
    RadarRegions["NEWCASTLE"] = "IDR043";
    /** @deprecated Use WA_NEWDEGATE instead */
    RadarRegions["NEWDEGATE"] = "IDR313";
    /** @deprecated Use QLD_CAIRNS instead */
    RadarRegions["CAIRNS"] = "IDR193";
    /** @deprecated Use QLD_TOWNSVILLE instead */
    RadarRegions["TOWNSVILLE"] = "IDR1063";
    /** @deprecated Use QLD_GLADSTONE instead */
    RadarRegions["GLADSTONE"] = "IDR233";
    /** @deprecated Use NSW_GRAFTON instead */
    RadarRegions["GRAFTON"] = "IDR283";
    /** @deprecated Use WA_PORT_HEDLAND instead */
    RadarRegions["PORT_HEDLAND"] = "IDR323";
    /** @deprecated Use WA_BROOME instead */
    RadarRegions["BROOME"] = "IDR173";
    /** @deprecated Use NT_ALICE_SPRINGS instead */
    RadarRegions["ALICE_SPRINGS"] = "IDR253";
})(RadarRegions || (exports.RadarRegions = RadarRegions = {}));
//# sourceMappingURL=enums.js.map