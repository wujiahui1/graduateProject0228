### 毕业设计的程序 ####

### 项目技术选型采用  react ＋ react-redux + scss + antd + mongodb + node  ### 
1. 首先用create-react-app搭建起基础的react引用脚手架

2. 引入antd， 直接使用 npm install antd 即可

3. 支持scss
    1. 首先安装sass-loader和node-sass依赖
       npm install sass-loader node-sass --save-dev
    2. 在配置的webpack.config.js文件中添加 sass-loader
    {
        test:/\.scss$/,
        loaders:['style-loader','css-loader','sass-loader']
    }

    3. 开启eslint配置
       a. 首先在vscode下载eslint，并配置json文件  https://www.jianshu.com/p/39e8aad781ed
       b. 全局下载eslint，并在项目中初始化.eslintrc.js文件，配置其中的eslint指令


3.1 
 1. layout 布局的时候content根据内容决定的
    
    因为layout没有占满整个屏幕