const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const express = require('express');
const locals = {/* ...*/};
const pug = require('electron-pug')({pretty: false}, locals);
var bodyParser = require('body-parser')

let win
var expressApp

function createWindow ()
{
	InitializeExpress();
	win = new BrowserWindow({width: 800, height: 600})
	win.loadURL(`file://${__dirname}/resources/views/main.pug`)
	win.on('closed', () => {
		win = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin')
	{
		app.quit()
	}
})

app.on('activate', () => {
	if (win === null)
	{
		createWindow()
	}
})

function InitializeExpress()
{
	expressApp = express();
	expressApp.use(bodyParser.json());
	expressApp.use(bodyParser.urlencoded({
  		extended: true
	}));

	expressApp.listen(3000, function ()
	{
  		console.log('Express app listening on port 3000!')
	})

	expressApp.post('/create', function (req, res)
	{
		win.webContents.send('create', req.body);
		res.send('success');
	})

	expressApp.post('/addvalue', function (req, res)
	{
		win.webContents.send('addvalue', req.body);
		res.send('success');
	})
}
