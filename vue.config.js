const webpack=require('webpack');
const path=require('path');
const configs=require('./config/module.config')

function resolve(dir) {
    return path.join(__dirname, dir)
}

console.log(JSON.stringify(configs));
console.log("当前环境:"+process.env.NODE_ENV);
console.log("当前运行项目:"+process.env.MODULE_NAME);

module.exports={
    configureWebpack:{
        plugins:[
            new webpack.DefinePlugin({
                "process.env":{
                    MODULE_NAME:JSON.stringify(process.env.MODULE_NAME)
                }
            })
        ]
    },
    publicPath:'./', // 设置加载静态资源的路径为相对路径
    outputDir:"dist/"+process.env.MODULE_NAME,
    assetsDir:'static',
    productionSourceMap: false,
    devServer:{
        hot:true,
    },
   chainWebpack:config =>{
       config.entry('app').clear().add(configs.entryUrl) //入口文件
       config.plugin('html').tap(arg=>{
             arg[0].template=configs.templateUrl;
             arg[0].filename=configs.fileName;
             arg[0].title=configs.title;
             return arg;
        })
        if(process.env.NODE_ENV =='development'){
            //开发环境
        }else{
            //生产环境
            // config.plugin('html').tap(arg=>{
            //     arg[0].title='QQ音乐时尚潮流';
            //     return arg
            // })
        }
   },
}