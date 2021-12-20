const request = require("request");
const cheerio = require("cheerio");
const { get } = require("request");
const scoreCardobj = require("./dataCard");

function gettttAll(AAlinkfullLink){
    request(AAlinkfullLink,cb);
    function cb(err, response, html){
        if(err){
            console.log(err);
        }
        else{
            xtractLinkkkkk(html);
        }
    }

}

function xtractLinkkkkk(html){
    let $ = cheerio.load(html);
    let anchorLink = $("#toc>div");
    for(let i = 0; i < anchorLink.length; i++){
        let insideLink = "https://en.wikipedia.org/" + $(anchorLink[i]).attr("href");
        console.log(insideLink);
        scoreCardobj.ps(insideLink);
    
    }
}

module.exports = {
    gAllmatches : gettttAll
}