'use strict';

const {app, BrowserWindow} = require('electron');

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// load menu dynamically by electron-menu-loader
require('../')('./demo/menu');

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	mainWindow = new BrowserWindow({
		width: 640,
		height: 480
	});

	mainWindow.loadURL(`file://${__dirname}/index.html`);
	mainWindow.on('closed', onClosed);
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {
	createMainWindow();
});

app.on('menuitem-click', event => {
	console.log(event.event,
							event.menuItem.label,
							event.browserWindow.getTitle());
});
