const {pngfilePath} = require('../common.js')

const autoMationButtonRunner = async(page)=>{
    console.log('#0 WORK http://localhost:1000/autoMationButton/index.html')
    console.time('[autoMationButtonRunner Test] excutede in...');
    timestamp = new Date().getTime();

    await page.screenshot({ path: pngfilePath+"\\autoMationButton_testResult\\ButtonInit"+timestamp+".png"})


    // waitFor will be removed migrate code
    await page.waitFor(10000);






    console.timeEnd('[autoMationButtonRunner Test] excutede in...');
}
module.exports = {
    autoMationButtonRunner
}