# Cigar2
Protocol 6 Agar.io client (only for private servers) based on Cigar  

### Based on
- [Original Cigar](https://github.com/CigarProject/Cigar)
- [Forked Cigar](https://github.com/Luka967/Cigar)

### PHP
To use the PHP version of Cigar2 move the stuff inside the php folder to the web folder and then upload the content of the web folder to your webserver

### Node.js
To use the Node.js version of Cigar2 edit the port variable located at the top of index.js then move all the files to your server, run `npm install` and then `node index.js`

### Static (for use in github.io etc.)
Move the file in the static folder (skins.js) to web/assets/js, put all your skin names into the array in the file (WITHOUT .png), remove line 22 and 24 in index.html and then upload the content of the web folder to your static webpage hoster

## New features
- Borders
- Seperate box for skin name
- Node.js server and static mode
- Auto-connect (specify it using `selected` in the select dropdown)
- Zoomout limit lowered
- Multi-cell minimap by [Tombez](https://github.com/Tombez)
- Touch controls by [Tombez](https://github.com/Tombez)

### Todos
Check out [issue 1](https://github.com/Cigar2/Cigar2/issues/1)