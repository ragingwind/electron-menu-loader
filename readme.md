# electron-menu-loader

> Loading menu template with custom events


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

### electronMenuLoader(file, [items], [options])

#### template

Type: `string`

path of the file content with the sets of the menu items

#### items

Type: 'array'

names of the item that will be picked up for menu to build up the `menu` instance of electron. such as 'darwin', returns value of process.platform or 'help'.

#### options

##### appMenu

if true, register menu to application menu. default is true.

## Events

`menu loader` supports `event` property on each menu item which will be translated to custom event function. Custom event will be fired named as [meuitem-click](https://github.com/ragingwind/electron-menu-loader/blob/master/index.js#L9) by Electron click event

## License

MIT © [Jimmy Moon](http://ragingwind.me)
