const url = "https://en.wikipedia.org/wiki/Main_Page"
const request = require("request");
const path = require("path");
const cheerio = require("cheerio");
const fs = require("fs");
// const Allmatchobj = require("./allData");
// const iplPath = path.join(__dirname,"Datas");
// dirCreator(iplPath);

request(url, cb);
function cb(err, response, html){
    if(err){
        console.log(err);
    }
    else{
        xtractLink(html);
    }
}
function xtractLink(html){
    let $ = cheerio.load(html);
    anchorElem = $("a[title='Wikipedia:Contents/Portals']");
    let portallink = anchorElem.attr("href");
    //console.log(link);
    let portalfullLink = "https://en.wikipedia.org/" + portallink;
    //console.log(fullLink);
    //Allmatchobj.gAllmatches(fullLink);
    getAll(portalfullLink);
}

function getAll(portalfullLink){
    request(portalfullLink,cb);
    function cb(err, response, html){
        if(err){
            console.log(err);
        }
        else{
            xtractLinkk(html);
        }
    }

}

function xtractLinkk(html){
    let $ = cheerio.load(html);
    anchorElem = $("a[title='Wikipedia:Contents/A–Z index']");
    let azlink = anchorElem.attr("href");
    //console.log(link);
    let azlinkfullLink = "https://en.wikipedia.org/" + azlink;
    //console.log(fullLink);
    //Allmatchobj.gAllmatches(fullLink);
    gettAll(azlinkfullLink);
}

function gettAll(azlinkfullLink){
    request(azlinkfullLink,cb);
    function cb(err, response, html){
        if(err){
            console.log(err);
        }
        else{
            xtractLinkkk(html);
        }
    }

}

function xtractLinkkk(html){
    let $ = cheerio.load(html);
    anchorElem = $("a[title='Special:AllPages/A']");
    let Alink = anchorElem.attr("href");
    //console.log(link);
    let AlinkfullLink = "https://en.wikipedia.org/" + Alink;
    //console.log(fullLink);
    //Allmatchobj.gAllmatches(fullLink);
    gettAll(AlinkfullLink);
}

function getttAll(AlinkfullLink){
    request(AlinkfullLink,cb);
    function cb(err, response, html){
        if(err){
            console.log(err);
        }
        else{
            xtractLinkkkk(html);
        }
    }

}

function xtractLinkkkk(html){
    let $ = cheerio.load(html);
    anchorElem = $("a[title='A']");
    let AAlink = anchorElem.attr("href");
    //console.log(link);
    let AAlinkfullLink = "https://en.wikipedia.org/" + AAlink;
    //console.log(fullLink);
    //Allmatchobj.gAllmatches(fullLink);
    gettttAll(AAlinkfullLink);
}




// function dirCreator(filePath){
//     if(fs.existsSync(filePath) == false){
//         fs.mkdirSync(filePath);
//     }
// } a[title="Special:AllPages/A"]