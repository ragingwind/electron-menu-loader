'use strict';

const appName = require('electron').app.getName();

module.exports = {
	label: 'Help',
	submenu: [{
		label: 'Search'
	}, {
		label: appName + ' Help',
		role: 'help'
	}]
};
