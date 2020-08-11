const { app, BrowserWindow, Menu, Tray } = require('electron');
Menu.setApplicationMenu(null);

let win;
let appIcon = null;
app.on('ready', () => {
    win = new BrowserWindow({
        //fullscreen: true,
        show: false
    });
    win.loadURL('https://dida365.com/signin');

    // 设置系统托盘
    appIcon = new Tray(__dirname + '/dida.png');
    let contextMenu = Menu.buildFromTemplate([
        { label: 'open', click: () => {win.show();} },
        { 
            label: 'quit', click: () => {
                win.destroy(); // 后面重设了close事件，会导致app.quit无法退出，所以这里强制关闭窗口
                app.quit();
            }
        },
    ]);
    appIcon.setToolTip('This is my application.');
    appIcon.setContextMenu(contextMenu);
    appIcon.on('click', () => {
        win.show();
    });

    // 设置icon
    win.setIcon(__dirname + '/dida.png');

    // 启动慢，但是不会白屏
    win.once('ready-to-show', () => {
        win.show();
        win.maximize();
    });
    win.on('close', (e) => {
        e.preventDefault(); // 取消该事件的操作
        win.hide();
    });
});
