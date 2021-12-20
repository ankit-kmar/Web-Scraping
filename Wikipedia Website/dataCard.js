
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

function processScorecard(url){
    request(url, cb);
}

function cb(err, response, html){
    if(err){
        console.log(err);
    }
    else{
        xtractInsidedetail(html);
    }
}

function xtractInsidedetail(html){
    let $ = cheerio.load(html);
    let history = "";
    let history_array = $(".mw-headline#History").find("p").text();
    for(let i = 0; i < history_array.length; i++){
        history += history_array[i];
    }
    let use_in_writing_system = "";
    let use_in_writing_system_array = $(".mw-headline#Use_in_writing_systems").find("p").text();
    for(let i = 0; i < use_in_writing_system_array.length; i++){
        use_in_writing_system += use_in_writing_system_array[i];
    }
    let Other_uses = "";
    let Other_uses_array = $(".mw-headline#Other_uses").find("p").text();
    for(let i = 0; i < Other_uses_array.length; i++){
        Other_uses += Other_uses_array[i];
    }
}

function processPlayer(history, use_in_writing_system, Other_uses ){
    let teamPath = path.join(__dirname, "ipl", teamName);
    dirCreator(teamPath);
    let filePath = path.join(teamPath, playerName + ".xlsx");
    let content = excelReader(filePath, playerName);
    let playerObj = {
        teamName,
        playerName,
        runs,
        balls,
        fours,
        sixes,
        sr,
        date,
        venue, 
        opponentName,
        result
    }
    content.push(playerObj);
    excelWriter(filePath, content, playerName);
}
function dirCreator(filePath){
    if(fs.existsSync(filePath) == false){
        fs.mkdirSync(filePath);
}
}


function excelWriter(filePath, json, sheetName){
    let newWB = xlsx.utils.book_new();
    let newWS = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, filePath);

}

function excelReader(filePath, sheetName){
    if(fs.existsSync(filePath) == false){
        return [];
    }
    let wb = xlsx.readFile(filePath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;

}

module.exports = {
    ps:processScorecard
}