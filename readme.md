# electron-menu-loader

> Loading menu manifest from seperated menu files, Supporting a delegate custom event for Menu click event


## Install

```
$ npm install --save electron-menu-loader
```

## Usage

```js
// load manifest from a file
require('electron-menu-loader')('./menu');
require('electron-menu-loader')(require('./menu'));

// load manifest with params
const {app} = require('electron');

// load shared meny and specific menu of target platform
let menu = require('./menu');
menu[process.platform] = require(process.platform);
require('electron-menu-loader')(menu);

// manange menu click event in the single place
app.on('menuitem-click', event => {
	console.log(event.event,
	event.menuItem.label,
	event.browserWindow.getTitle());
});
```

## API

### electronMenuLoader(manifest, [options])

#### manifest

Type: `string`

path of the file content with the sets of the menu items

#### options

##### appMenu

If it set with true? this will register a menu to application menu. default is true.

## Events

`menu loader` will convert `event` property to custom event if the property is set in manifest like below. The custom event function translated is beging converted when the manifest has been loading.

```json
module.exports = {
	label: appName,
	submenu: [{
		label: 'Preferences',
		event: 'prefer',
		params: 'optional params'
	}]
};
```

When user click the `Preferences`, the custom event will be fired to `app` with the event named [meuitem-click](https://github.com/ragingwind/electron-menu-loader/blob/master/index.js#L9). See refer to below sample.

```js
app.on('menuitem-click', event => {
	console.log(event.event,
	event.menuItem.label,
	event.browserWindow.getTitle());
});
```
## License

MIT © [Jimmy Moon](http://ragingwind.me)
