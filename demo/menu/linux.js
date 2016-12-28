'use strict';

const {app} = require('electron');

const appName = app.getName();

module.exports = {
	label: appName,
	submenu: [{
		label: 'About ' + appName,
		event: 'about',
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
		accelerator: 'Ctrl+H',
		role: 'hide'
	}, {
		label: 'Hide Others',
		accelerator: 'Ctrl+Shift+H',
		role: 'hideothers'
	}, {
		label: 'Show All',
		role: 'unhide'
	}, {
		type: 'separator'
	}, {
		label: 'Quit',
		accelerator: 'Ctrl+Q',
		click: () => app.quit()
	}]
};
