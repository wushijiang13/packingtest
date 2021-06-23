# packingtest
目录：



## 下载依赖
```
npm install
```

### 构建项目
```
npm run build
```
### 运行login模块页面
```
"run:login": "cross-env NODE_ENV=development MODULE_NAME=login npm run serve
```
### 构建login模块页面
```
"build:login": "cross-env NODE_ENV=production MODULE_NAME=login npm run build
```
### 运行整个项目
```
npm run serve
"run:all":"cross-env NODE_ENV=development MODULE_NAME=all npm run serve
```
### 运行login模块页面
```
"build:all": "cross-env NODE_ENV=production MODULE_NAME=all npm run build"
```
通过 npm run xxx 即可快速调用

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
