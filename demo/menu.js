'use strict';

const platformMenu = {
	darwin: require('./menu/darwin'),
	linux: require('./menu/linux'),
	win32: require('./menu/win32')
};

module.exports = {
	electron: platformMenu[process.platform],
	editAndView: require('./menu/edit-and-view'),
	help: require('./menu/help')
};
