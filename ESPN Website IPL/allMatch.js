const request = require("request");
const cheerio = require("cheerio");
const { get } = require("request");
const scoreCardobj = require("./scorecard");

function getAllmatches(fullLink){
    request(fullLink, cb);
    function cb(err, response, html){
        if(err){
            console.log(err);
        }
        else{
            extractLink(html);
        }
    }
    }
    
    function extractLink(html){
        let $ = cheerio.load(html);
        let anchorLinks = $("a[data-hover='Scorecard']");
    
        for(let i = 0; i< anchorLinks.length; i++){
        let links = "https://www.espncricinfo.com/" + $(anchorLinks[i]).attr("href");
        console.log(links);
        scoreCardobj.ps(links);
    }
    }

    module.exports = {
        gAllmatches:getAllmatches
    }