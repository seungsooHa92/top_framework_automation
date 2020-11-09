const {
pngfilePath,
_explicit_wait
} = require('../common.js');
const fs = require('fs');

const autoMationCheckboxRunner = async(page)=>{
    console.log('#3     :WORK http://localhost:1008/autoMationCheckbox/index.html')
    console.time('[autoMationCheckboxRunner Test] excutede in...');
    timestamp = new Date().getTime();
    await page.screenshot({ path: pngfilePath+"\\autoMationCheckbox_testResult\\CheckboxInit"+timestamp+".png"})

    let eventButton = _explicit_wait(page,'#eventButton',3,500);
    if (eventButton){
        page.click('#eventButton').then((result)=>{

        })
    }
    await page.waitForTimeout(1000);

    let eventCheckbox = _explicit_wait(page,'#eventCheckBox > label',3,500);

    if(eventCheckbox){
        page.$('#eventCheckBox > label').then((result)=>{
            result.click();
        })
    }
    await page.waitForTimeout(1000);
    let apiButton = _explicit_wait(page,'#apiButton',3,500);
    if(apiButton){
        page.$('#apiButton').then((result)=>{
            result.click();
        })
    }
    await page.waitForTimeout(1000);

    let apiResultShowIcon = _explicit_wait(page,'#apiResultShowIcon',3,500);
    if(apiResultShowIcon){
        page.$('#apiResultShowIcon').then((result)=>{
            result.click();
        })
    }
    await page.waitForTimeout(1000);

    let postToServerIcon = _explicit_wait(page,'#postToServerIcon',3,500);
    if(postToServerIcon){
        page.$('#postToServerIcon').then((result)=>{
            result.click();
        })
    }
    await page.waitForTimeout(1000);



    console.timeEnd('[autoMationCheckboxRunner Test] excutede in...');
}
module.exports = {
    autoMationCheckboxRunner
}