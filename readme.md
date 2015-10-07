# electron-menu-loader

> Loading a menu template for app running on current platform


## Install

```
$ npm install --save electron-menu-loader
```

## Usage

```js
// application, using loader
var loader = require('electron-menu-loader')('menu', [process.platform, 'help'], {
	appMenu: true
});

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
			event: 'new-file'
		}]
	},
	help: [{
		label: 'Help',
		submenu: []
	}]
};
```

## API

### electronMenuLoader(file, <items>, <options>)

#### template

Type: `string`

path of the file content with the sets of the menu items

#### items

Type: 'array'

names of the item that will be picked up for menu to build up the `menu` instance of electron. such as 'darwin', returns value of process.platform or 'help'.

#### options

##### appManu

if true, register menu to application menu. default is true.

## License

MIT © [Jimmy Moon](http://ragingwind.me)
