# Cigar2
Protocol 6 Agar.io client (only for private servers) based on Cigar  
Cigar2 is always under development but a new version will never be pushed with known bugs, however there may be unknown bugs but you can report these and they should get fixed as soon as possible. This basically means that the master branch is always stable and is ready-for-use :)

### Adding servers
Locate the select element in the index.html then add new entries, WARNING: only put selected in one of them!

### [Recommended server, OgarII by Luka](https://github.com/Luka967/OgarII)

### Based on
- [Original Cigar](https://github.com/CigarProject/Cigar)
- [Forked Cigar](https://github.com/Luka967/Cigar)

### Uploading skins
Upload them to the skins folder (if you use Nodejs version then it is web/skins).
If you have Nodejs installed, you can run `node updateSkinList.js` in the root directory, otherwise just manually put the skin names in `/web/skinList.txt` separated by commas.

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
