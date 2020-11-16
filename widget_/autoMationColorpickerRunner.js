const {
pngfilePath,
_explicit_wait,
selectorClickFunc,

} = require('../common.js');
const fs = require('fs');

const autoMationColorpickerRunner = async(page)=>{
    console.log('#0     :WORK http://localhost:1011/autoMationColorpicker/index.html')
    console.time('[autoMationColorpickerRunner Test] excutede in...');
    timestamp = new Date().getTime();
    
    await page.screenshot({ path: pngfilePath+"\\autoMationColorpicker_testResult\\ColorpickerInit"+timestamp+".png"});
    // waitFor will be removed migrate code

    let eventButton = _explicit_wait(page,'#eventButton',3,500);
    if (eventButton){
        page.click('#eventButton').then((result)=>{

        })
    }
    await page.waitForSelector('#ColorPicker11')


    /*
        colorPicker 객체를 단순하게 selector 값을 통하여 
        click으로 select 되지 않음

        solution =>
                i.  page.evaluate 를 통한 해당 페이지에서의 객체 위치 값 반환 
                ii. mouse.down up으로 클릭 

    */
    const color_ = await page.$('#ColorPicker11');
    const rect = await page.evaluate((color_)=>{
      
        const {x,y,width,height} = color_.getBoundingClientRect();
        console.log(x,y,width,height)
        return {x,y,width,height};
    },color_)

    console.log(rect);

    await page.mouse.move(rect.x + 10, rect.y + 10);
    
    await page.waitForTimeout(500);
    await page.mouse.down({button:'left'});
    await page.waitForTimeout(500);
    await page.mouse.up({button:'left'});
    await page.waitForTimeout(500);
    await page.mouse.move(rect.x + 100, rect.y + 50);
    await page.waitForTimeout(500);
    await page.mouse.down({button:'left'});
    await page.waitForTimeout(500);
    await page.mouse.up({button:'left'});

    dialog_okButton = `#ColorPicker11 > div > div:nth-child(3) > button.top-colorpicker-ok`;
    await page.waitForTimeout(500);

    selectorClickFunc(page,dialog_okButton,3,500);
    await page.waitForTimeout(500);

    selectorClickFunc(page,'#apiButton',3,500); // apiButton Click
    await page.waitForTimeout(500);


    selectorClickFunc(page,'#apiResultShowIcon',3,500); // apiResultShow Click

    selectorClickFunc(page,'#postToServerIcon',3,500);

    console.timeEnd('[autoMationColorpickerRunner Test] excutede in...');
}
module.exports = {
    autoMationColorpickerRunner
}