## 快速打开滴答清单的electron程序

一个快速打开滴答清单的electron程序, 可以通过替换源码中的url打开其他网页,比如https://www.bilibili.com/


#### install 

1.      直接克隆代码 git clone https://github.com/x93008/electron-dida.git
2.      必须先保证有安装nodejs
3.      全局安装electron: npm i electron -g 

#### 运行

1.      执行命令: electron <代码仓库目录> 

>       可以使用electron-builder直接打包为应用程序，我是直接配置了脚本去执行这行命令
