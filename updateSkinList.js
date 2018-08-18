const fs = require("fs"),
      folderContents = fs.readdirSync("./web/skins"),
      fileNames = folderContents.filter(f => f.endsWith(".png"));
fs.writeFileSync("./web/skinList.txt", fileNames.map(f => f.slice(0, -4)).join(), err => {
    if (err) throw err;
});
console.log("Successfully updated skinList.txt!");
