'use strict';

const {app} = require('electron');

const appName = app.getName();

module.exports = {
	label: appName,
	submenu: [{
		label: 'About ' + appName,
		role: 'about',
		params: {
			version: '1.0.0'
		}
	}, {
		type: 'separator'
	}, {
		label: 'Preferences',
		event: 'prefer',
		params: 'optional params'
	}, {
		type: 'separator'
	}, {
		label: 'Hide ' + appName,
		accelerator: 'Command+H',
		role: 'hide'
	}, {
		label: 'Hide Others',
		accelerator: 'Command+Shift+H',
		role: 'hideothers'
	}, {
		label: 'Show All',
		role: 'unhide'
	}, {
		type: 'separator'
	}, {
		label: 'Quit',
		accelerator: 'Command+Q',
		click: () => app.quit()
	}]
};
