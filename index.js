'use strict';

const Menu = require('menu');
const path = require('path');
const app = require('app');

function bindClickEvent(menu) {
	menu.click = function(menuItem, browserWindow) {
		app.emit('menuitem-click', {
			event: menu.event,
			menuItem: menuItem,
			browserWindow: browserWindow
		});
	};

	return menu;
}

module.exports = function (file, items, opts) {
	if (!Array.isArray(items)) {
		opts = items;
		items = [process.platform];
	}

	opts = opts || {
		appMenu: true
	};

	// read sets of menu
	let sets = require(path.resolve(app.getAppPath(), file));
	if (!sets) {
		throw new Error('Menu template file has been missing');
	}

	let tpl = [];

	// post-processing of template
	for (let item of items) {
		// get a menu of top level
		let set = sets[item];

		if (!Array.isArray(set)) {
			throw new Error('Menu item type should be array');
		}

		for (let menu of set) {
			for (let submenu of menu.submenu) {
			// event custom prop will be replaced by click prop
				if (submenu.event) {
					bindClickEvent(submenu);
				}
			}
		}

		tpl = tpl.concat(set);
	}

	const menu = Menu.buildFromTemplate(tpl);

	if (opts.appMenu) {
		app.on('ready', () => {
			Menu.setApplicationMenu(menu);
		});
	}

	return menu;
};
