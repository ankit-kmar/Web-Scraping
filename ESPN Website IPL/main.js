const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"
const request = require("request");
const path = require("path");
const cheerio = require("cheerio");
const fs = require("fs");
const Allmatchobj = require("./allMatch");
const iplPath = path.join(__dirname,"ipl");
dirCreator(iplPath);

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
    anchorElem = $("a[data-hover = 'View All Results']");
    let link = anchorElem.attr("href");
    //console.log(link);
    let fullLink = "https://www.espncricinfo.com/" + link;
    //console.log(fullLink);
    Allmatchobj.gAllmatches(fullLink);
}

function dirCreator(filePath){
    if(fs.existsSync(filePath) == false){
        fs.mkdirSync(filePath);
    }
}