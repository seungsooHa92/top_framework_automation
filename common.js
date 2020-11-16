const puppeteer = require('puppeteer');
const url_list = [
    {
        url:'http://localhost:1000/autoMationAbsoluteLayout/index.html',
        id: 'autoMationAbsoluteLayout',
        page:'abslouteLayoutPage'
    },
    {
        url:'http://localhost:1005/autoMationButton/index.html',
        id: 'autoMationButton',
        page:'buttonPage'
    },
    {
        url:'http://localhost:1008/autoMationCheckbox/index.html',
        id: 'autoMationCheckbox',
        page:'checkboxPage'
    },
    {
        url:'http://localhost:1011/autoMationColorpicker/index.html',
        id: 'autoMationColorpicker',
        page:'colorpickerPage'
    },
    {
        url:'http://localhost:1048/autoMationTableView/index.html',
        id: 'autoMationTableView',
        page:'TableViewPage'
    },
]

const pngfilePath = "C:\\Users\\seungsoo_ha\\Desktop\\topAutomation\\"

const viewPortObj = {//set Page viewPort
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
    }

// SelectorClick api
const selectorClickFunc = async(page,selector,cnt,delay)=>{

    let _target = _explicit_wait(page,selector,cnt,delay);
    if(_target){
        page.click(selector).then((result)=>{
            console.log(`${selector} is clicked ...//`);
        }).catch((error)=>{console.error(error)});
    }

}

// SelectorDblClick api

const selectorDblClickFunc = async(page,selector,cnt,delay)=>{

    let _target = _explicit_wait(page,selector,cnt,delay);
    if(_target){
        page.click(selector,{clickCount:3}).then((result)=>{
            console.log(`${selector} is Double clicked ...//`);
        }).catch((error)=>{console.error(error)});
    }

}



const enter_function = async(page,project,port)=>{

    console.log(`#1     :WORK http://localhost:10${port}/autoMation${project}/index.html`)
    console.time(`[${project} project excuted in]`);
    console.log('%c%s', 'color: #00e600', `${project} Project Entered    =====`);
    timestamp = new Date().getTime();
    await page.screenshot({ path: pngfilePath+`\\autoMation${project}_testResult\\${project}timestamp.png`})

}
const exit_function = (project)=>{
    console.timeEnd(`[${project} project excuted in]`);
}

/*
element를 안전하게 찾는 메소드 
polling 방식으로 document object를 검출 함

1차 ele ? waiting : polling 
*/

const getSafetyElement = async(page,selector,time)=>{
    try{
        let eleObj = await page.$(selector);

        if(!eleObj){
            throw new Error('elementObj is NULL');
        }
        else{
            console.log(`[${selector} is Success]`);
        }
        return eleObj;
    }    
    catch(e){
        console.log(`Find Element Error is Selector : ${selector}`);
        console.log(`${time} after... (retry)`);
        await page.waitForTimeout(time);
        return false;            
    }
}

const _explicit_wait = async(page,selector,count,time)=>{
    
    console.time(`[findtopElement] finding <${selector}> is excuted ->`);

    let isSuccess = false;
    let _time = time || 2000;
    let _cnt = count || 3;
    let isCondition = 0;

    if(typeof selector === undefined && typeof selector === "undefined"){
        return isSuccess;
    }
    while(!isSuccess &&(isCondition < _cnt)){
        isSuccess = await getSafetyElement(page,selector,_time);
        if(isSuccess !== false){
            isCondition = _cnt+1;
        }
        ++isCondition;
    }
    console.timeEnd(`[findtopElement] finding <${selector}> is excuted ->`);

    return isSuccess;
}

module.exports = {
    url_list,
    pngfilePath,
    viewPortObj,
    getSafetyElement,
    _explicit_wait,
    enter_function,
    exit_function,
    selectorClickFunc,
    selectorDblClickFunc
}