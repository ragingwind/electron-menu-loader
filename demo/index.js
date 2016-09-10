'use strict';
const app = require('app');
const path = require('path');
const BrowserWindow = require('browser-window');
// const MenuLoader = require('../');
const menu = require('./menu-edit-and-view');
console.log(menu);
// report crashes to the Electron project
require('crash-reporter').start({
	companyName: 'github.com/ragingwind',
	submitURL: 'http://github.com/ragingwind/electron-menu-loader'
});

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new BrowserWindow({
		width: 640,
		height: 480
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();

	// MenuLoader.load({
	//
	// }, [
	// 	'menu-darwin.js',
	// 	'menu-edit.js',
	// 	'menu-help.js'
	// ]);
});
