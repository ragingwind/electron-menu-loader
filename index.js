'use strict';

const path = require('path');
const {app, Menu} = require('electron');

function bindClickEvent(menu) {
	menu.click = function (menuItem, browserWindow) {
		app.emit('menuitem-click', {
			event: menu.event,
			menuItem,
			browserWindow
		});
	};

	return menu;
}

module.exports = function (file, opts) {
	opts = opts || {
		appMenu: true
	};

	// read manifest listmenu
	// dynamic import is not supported in ES2015 import
	let manifest;

	if (typeof file === 'object') {
		manifest = file;
	} else {
		manifest = require(path.resolve(process.cwd(), file));
	}

	if (!manifest) {
		throw new Error('Invalud menu manifest file path');
	}

	let tpl = [];

	for (const list in manifest) {
		if (manifest[list].submenu) {
			for (const submenu of manifest[list].submenu) {
				// event custom prop will be replaced by click prop
				if (submenu.event) {
					bindClickEvent(submenu);
				}
			}
		}

		tpl = tpl.concat(manifest[list]);
	}

	const menu = Menu.buildFromTemplate(tpl);

	if (opts.appMenu) {
		app.on('ready', () => {
			Menu.setApplicationMenu(menu);
		});
	}

	return menu;
};
