const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
// const pdfkit = require("pdfkit");
const xlsx = require("xlsx");

function getIssuePageHtml(url, topic, repoName){
    request(url,cb);
    function cb(err, response, html){
        if(err){
            console.log(err);
        }
        else if(response.statusCode == 404){
            console.log("Page not found");
        }
        else{
            getIssues(html);
            // console.log(html);
        }
    }
    function getIssues(html){
        let $ = cheerio.load(html);
        let issuesElemArr = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        let arr =[];

        console.log(topic);
        for(let i = 0; i < issuesElemArr.length; i++){
            let link = $(issuesElemArr[i]).attr("href");
            arr.push(link); 
        }
        // console.log(topic,"     ",arr);
        let folderpath = path.join(__dirname, topic);
        dirCreater(folderpath);
        
        
        let filepath = path.join(folderpath, repoName + ".json");// because we are creating repoName file under topic folder.
        // content.push(arr);
        // excelWriter(filepath, content, repoName);
        // let text =  JSON.stringify(arr);
        // var pdfDoc = new pdfkit;
        // pdfDoc.pipe(fs.createWriteStream(filepath));
        // pdfDoc.text(text);
        // pdfDoc.end();



        fs.writeFileSync(filepath, JSON.stringify(arr));
    }

}

function dirCreater(folderpath){
    if(fs.existsSync(folderpath) == false){
        fs.mkdirSync(folderpath);
    }

}

// function excelWriter(filePath, json, sheetName){
//     let newWB = xlsx.utils.book_new();
//     let newWS = xlsx.utils.json_to_sheet(json);
//     xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
//     xlsx.writeFile(newWB, filePath);

// }

// function excelReader(filePath, sheetName){
//     if(fs.existsSync(filePath) == false){
//         return [];
//     }
//     let wb = xlsx.readFile(filePath);
//     let excelData = wb.Sheets[sheetName];
//     let ans = xlsx.utils.sheet_to_json(excelData);
//     return ans;

// }

module.exports = getIssuePageHtml;
