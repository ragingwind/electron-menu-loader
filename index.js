'use strict';

const Menu = require('menu');

module.exports = function (menuPath) {
	const menu = require(menuPath);
	if (!menu) {
		throw new Error('Menu template has been missing');
	}

	const tpl = menu[process.platform];
	if (!tpl) {
		throw new Error('Menu template for current platform');
	}

	if (menu.help) {
		tpl[menu.length - 1].submenu = menu.help;
	}

	return Menu.buildFromTemplate(tpl);
};
