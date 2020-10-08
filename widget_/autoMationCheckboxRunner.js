const {pngfilePath} = require('../common.js')
const autoMationCheckboxRunner = async(page)=>{
    console.log('#1 WORK http://localhost:1001/autoMationCheckbox/index.html')
    console.time('[autoMationCheckboxRunner Test] excutede in...');
    timestamp = new Date().getTime();
    await page.screenshot({ path: pngfilePath+"\\autoMationCheckbox_testResult\\CheckboxInit"+timestamp+".png"})










    console.timeEnd('[autoMationCheckboxRunner Test] excutede in...');
}
module.exports = {
    autoMationCheckboxRunner
}