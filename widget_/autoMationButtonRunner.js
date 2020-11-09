const {
pngfilePath,
_explicit_wait
} = require('../common.js');
const fs = require('fs');

const autoMationButtonRunner = async(page)=>{
    console.log('#0     :WORK http://localhost:1005/autoMationButton/index.html')
    console.time('[autoMationButtonRunner Test] excutede in...');
    timestamp = new Date().getTime();
    
    await page.screenshot({ path: pngfilePath+"\\autoMationButton_testResult\\ButtonInit"+timestamp+".png"});
    // waitFor will be removed migrate code

    let eventButton = _explicit_wait(page,'#eventButton',3,500);
    if (eventButton){
        page.click('#eventButton').then((result)=>{

        })
    }

    await page.screenshot({ path: pngfilePath+"\\autoMationButton_testResult\\ButtonEvent"+timestamp+".png"})

    await page.waitForTimeout(500);
    
    await page.$eval(('#clickButton'),el=>el.click());

    //await page.evaluate((selector)=>document.querySelector(selector).click(),'#clickButton');


    await page.waitForTimeout(1500);



/* 
original Style Code -----


   

    let click4Button = _explicit_wait(page,'#clickB4utton',3,500);


    let clickButton = _explicit_wait(page,'#clickButton',3,500);
    if (clickButton){
        page.$('#clickButton').then((result)=>{
            result.click()
        })
    }
    await page.waitForTimeout(1500);

    let dblclickButton = _explicit_wait(page,'#dblclickButton',3,500);
    if(dblclickButton){
        page.$('#dblclickButton')
            .then((result)=>{
                result.click({clickCount:2})

            })
    }
    await page.waitForTimeout(1500);

*/

    await page.screenshot({ path: pngfilePath+"\\autoMationButton_testResult\\ButtonEvent_onClick"+timestamp+".png"})



    console.timeEnd('[autoMationButtonRunner Test] excutede in...');
}
module.exports = {
    autoMationButtonRunner
}