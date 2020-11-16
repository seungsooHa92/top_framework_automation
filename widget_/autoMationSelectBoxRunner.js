const {
pngfilePath,
_explicit_wait,
selectorClickFunc,

} = require('../common.js');
const fs = require('fs');

const autoMationSelectBoxRunner = async(page)=>{
    console.log('#0     :WORK http://localhost:1040/autoMationSelectBox/index.html')
    console.time('[autoMationSelectBoxRunner Test] excutede in...');
    timestamp = new Date().getTime();
    
    await page.screenshot({ path: pngfilePath+"\\autoMationSelectBox_testResult\\SelectBoxInit"+timestamp+".png"});
    // waitFor will be removed migrate code

    let eventButton = _explicit_wait(page,'#eventButton',3,500);
    if (eventButton){
        page.click('#eventButton').then((result)=>{

        })
    }
    await page.waitForTimeout(500);
    selectorClickFunc(page,'#SelectBox2 > span > i',3,500);
    await page.waitForTimeout(500);
    selectorClickFunc(page,'#SelectBox2 > ul > li.top-selectbox-option.option_1',3,500);
    await page.waitForTimeout(500);

    selectorClickFunc(page,'#apiButton',3,500); // apiButton Click


    console.timeEnd('[autoMationSelectBoxRunner Test] excutede in...');
}
module.exports = {
    autoMationSelectBoxRunner
}