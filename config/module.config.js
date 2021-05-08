let config = {
    entryUrl:"./src/main.js",
    templateUrl:"public/index.html",
    fileName:"index.html",
    title:"index"
}
if(process.env.MODULE_NAME == 'login'){
    config.entryUrl="./src/components/login/main.js";
    config.title="login";
}

module.exports=config;

