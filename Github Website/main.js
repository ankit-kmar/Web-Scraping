const url = "https://github.com/topics";
const { Cheerio } = require("cheerio");
const request = require("request");
const cheerio = require("cheerio");
const { link } = require("fs");
const getReposPageHtml = require("./reposPage");


request(url,cb);
function cb(err, response, html){
    if(err){
        console.log(err);
    }
    else if(response.statusCode == 404){
        console.log("Page not found");
    }
    else{
        getTopicLinks(html);
        // console.log(html);
    }
}

function getTopicLinks(html){
    let $ = cheerio.load(html);
    let linkElemArr = $(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i = 0; i < linkElemArr.length; i++){
        let href = $(linkElemArr[i]).attr("href");
        let topic = href.split("/").pop();
        let fulllink = "https://github.com/" + href;
        // console.log(fullLink);
        getReposPageHtml(fulllink, topic);
    }

}