# electron-menu-loader [![Build Status](https://travis-ci.org/ragingwind/electron-menuloader.svg?branch=master)](https://travis-ci.org/ragingwind/electron-menuloader)

> Loading a menu template for app running on current platform


## Install

```
$ npm install --save electron-menu-loader
```

## Usage

```js
// application, using loader
var loader = require('electron-menu-loader')('menu');

// template, menu.js
module.exports = {
	darwin: {
		label: appName,
		submenu: [{
			label: `About ${appName}`,
			role: 'about'
		}]
	},
	linux: {
		label: 'File',
		submenu: [{
			label: 'New file',
			click() {
				newFile();
			}
		}]
	},
	help: [{
		label: 'Find',
		click() {
			find();
		}
	}]
};
```

## API

### electronMenuLoader(template)

#### template

Type: `string`

path of template script

## License

MIT © [Jimmy Moon](http://ragingwind.me)
