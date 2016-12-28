'use strict';

const {app} = require('electron');

module.exports = {
	label: 'Help',
	submenu: [{
		label: 'Search'
	}, {
		label: app.getName() + ' Help',
		role: 'help'
	}]
};
