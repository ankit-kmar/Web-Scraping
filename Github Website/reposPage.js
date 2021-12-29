const request = require("request");
const cheerio = require("cheerio");
const getIssuePageHtml = require("./issue");


function getReposPageHtml(url, topic){
    request(url,cb);
    function cb(err, response, html){
        if(err){
            console.log(err);
        }
        else if(response.statusCode == 404){
            console.log("Page not found");
        }
        else{
            getReposLink(html);
            // console.log(html);
        }
    }
function getReposLink(html){
    let $ = cheerio.load(html);
    let headingsArr = $(".text-bold.wb-break-word");

    console.log(topic);
    for(let i = 0; i < 8;i++){
        let link = $(headingsArr[i]).attr("href");
        // let fullLinkRepo = "https://github.com/" + link;
        let fullLink = `https://github.com${link}/issues`;
        let repoName = link.split("/").pop();
        // console.log(fullLinkRepo);
        // getPartcularRepo(fullLinkRepo);
        getIssuePageHtml(fullLink, topic, repoName);
    }
    console.log("----------------------------");


}

}

module.exports = getReposPageHtml;