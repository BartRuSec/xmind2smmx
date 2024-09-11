# xmind2smmx

xmind2smmx is a very simple tool for converting XMind files (.xmind) to SimpleMind (.smmx) format. It is not perfect but allows me to save a lot of time.

## Features

### Supported
- Convert .xmind files to .smmx format
- Preserve the mind map structure for following elements:
    - Topics hierarchy
    - Labels (as nested)
    - Notes
    - Links
    - Grouping
- Tested on XMind version 24.01 and SimpleMind Pro 2.4.0. Other versions are not tested and thus not supprted however might works (be careful and backup your files).

### Not supported
- Topics positions (currently smmx output is in  horisontal layout)
- Styles/ Colors
- Text formatting
- Images/Links (plain text only)
- Summaries
- ... many other Xmind or SimpleMind specific functionality 

## Installation

Install xmind2smmx with npm:

```bash
npm -g install xmind2smmx
```

## Usage

Shell:
```basg
xmind2smmx -h
```

Javascript:

```javascript
const xmind2smmx = require('xmind2smmx');

// Convert an XMind file to .smmx format
xmind2smmx.convert('path/to/your/file.xmind', 'path/to/output/file.smmx');
``` 


## Dependencies

This project uses several dependencies to work properly:

- [commander](https://www.npmjs.com/package/commander): A complete solution for node.js command-line interfaces.
- [jsonata](https://www.npmjs.com/package/jsonata): A lightweight query and transformation language for JSON data.
- [jszip](https://www.npmjs.com/package/jszip): A library for creating, reading and editing .zip files.
- [require-text](https://www.npmjs.com/package/require-text): A require.js plugin for loading text resources.
- [xml-js](https://www.npmjs.com/package/xml-js): A library for converting XML to JSON and vice versa.



<!-- 
## ContributingContributions are always welcome! See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`. -->

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

[@BartRuSec](https://www.github.com/BartRuSec)




