# Cigar2
Protocol 6 Agar.io client (only for private servers) based on Cigar  
Cigar2 is always under development but a new version will never be pushed with known bugs, however there may be unknown bugs but you can report these and they should get fixed as soon as possible. This basically means that the master branch is always stable and is ready-for-use :)

### Adding servers
Locate the select element in the index.html then add new entries, WARNING: only put selected in one of them!

### Based on
- [Original Cigar](https://github.com/CigarProject/Cigar)
- [Forked Cigar](https://github.com/Luka967/Cigar)

### PHP
To use the PHP version of Cigar2 move the stuff inside the php folder to the web folder and then upload the content of the web folder to your webserver

### Node.js
To use the Node.js version of Cigar2 edit the port variable located at the top of index.js then move all the files to your server, run `npm install` and then `node index.js`

### Static (for use in github.io etc.)
Remove `// ` from the 2nd line and put all your skin names into the array located at the same line in main_out.js (WITHOUT .png), and then upload the content of the web folder to your static webpage hoster

### Uploading skins
Upload them to the skins folder (if you use Node.js version then it is web/skins)

## New features
- Position/coordinates
- Borders
- Seperate box for skin name
- Node.js server and static mode
- Auto-connect (specify it using `selected` in the select dropdown)
- Zoomout limit lowered
- Multi-cell minimap by [Tombez](https://github.com/Tombez)
- Touch controls by [Tombez](https://github.com/Tombez)

### Todos
Check out [issue 1](https://github.com/Cigar2/Cigar2/issues/1)