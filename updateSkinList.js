const fs = require("fs");

const folderContents = fs.readdirSync("./web/skins");
const fileNames = folderContents.filter(f => f.endsWith(".png"));
const skins = fileNames.map(f => f.slice(0, -4));
fs.writeFileSync("./web/skinList.txt", skins.join(), err => {
    if (err) throw err;
});
console.log("Successfully updated skinList.txt!");
