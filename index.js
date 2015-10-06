'use strict';

const Menu = require('menu');
const path = require('path');
const app = require('app');

module.exports = function (menuPath) {
	const menu = require(path.resolve(process.cwd(), menuPath));
	if (!menu) {
		throw new Error('Menu template has been missing');
	}

	let tpl = menu[process.platform];
	if (!tpl) {
		throw new Error('Menu template for current platform');
	}

	if (menu.help) {
		tpl.push(menu.help);
	}

	app.on('ready', () => {
		Menu.setApplicationMenu(Menu.buildFromTemplate(tpl));
	});
};
