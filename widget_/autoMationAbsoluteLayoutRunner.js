const {pngfilePath} = require('../common.js');

const autoMationAbsoluteLayoutRunner = async(page)=>{
    console.log('#1     :WORK http://localhost:1000/autoMationAbsoluteLayout/index.html')
    console.time('[autoMationAbsoluteLayoutRunner Test] excutede in...');

    timestamp = new Date().getTime();
    await page.screenshot({ path: pngfilePath+"\\autoMationAbsoluteLayout_testResult\\autoMationAbsoluteLayoutInit"+timestamp+".png"})










    console.timeEnd('[autoMationAbsoluteLayoutRunner Test] excutede in...');
}
module.exports = {
   autoMationAbsoluteLayoutRunner
}