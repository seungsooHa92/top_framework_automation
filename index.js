const fs = require('fs');
const util = require('util');
const path = require('path');
const puppeteer = require('puppeteer');
const {url_list, viewPortObj} = require('./common.js');
const { url } = require('inspector');
const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('workSheet Name');
const {
start_prompt,
passArgCheck,
retry
} = require('./cli_prompt');
const {createPage} = require('./index_page_');

const {
    autoMationAbsoluteLayoutRunner
} = require('./widget_/autoMationAbsoluteLayoutRunner');
const {
    autoMationButtonRunner
} = require('./widget_/autoMationButtonRunner');
const {
    autoMationCheckboxRunner
} = require('./widget_/autoMationCheckboxRunner');
const {
autoMationTableViewRunner
} = require('./widget_/autoMationTableViewRunner.js');
const commander = require('commander');
const { cpuUsage } = require('process');

const mainRunner = async()=>{
    
    let ApiList = [];  
    let headless_;    
    commander.headless ? headless_ = true : headless_ = false;

    // cli_start
    start_prompt();    
    // custom argument는 node 프로그램과 main (index.js) 파일을 제외한 나머지들을 slice 시킨다.

    const browser = await puppeteer.launch({
        headless: false, 
        args: ['--window-size=1920,1080']
    });

    const readData = util.promisify(fs.readFile);
    await readData('data.json')
        .then( data =>{
        //console.log(JSON.parse(data));
        let data_ = JSON.parse(data);
      
        for(let props in data_){
            
            let myObj = new Object();
            myObj.name_ = props;
			myObj.properties = data_[props].property;
			myObj.events = data_[props].event;
			myObj.methods = data_[props].method;
			ApiList.push(myObj);
            }
        })
        .catch(err=>{
            console.log(err);
        })
       
        /*
        project 갯수 만큼 테스트 페이지 생성 해야함.
        ex_page = browser.newPage();
        */
    const [ 

    page_autoMationAbsolute,
    page_autoMationButton,
    page_autoMationCheckbox,
    page_autoMationTableView

    ] = await Promise.all([

        browser.newPage(),
        browser.newPage(),
        browser.newPage(),
        browser.newPage()
    ])


    await page_autoMationAbsolute.setViewport(viewPortObj);
    await page_autoMationButton.setViewport(viewPortObj);
    await page_autoMationCheckbox.setViewport(viewPortObj);
    await page_autoMationTableView.setViewport(viewPortObj);

    await Promise.all([

        page_autoMationAbsolute.goto('http://localhost:1000/autoMationAbsoluteLayout/index.html'),
        page_autoMationButton.goto('http://localhost:1005/autoMationButton/index.html'),
        page_autoMationCheckbox.goto('http://localhost:1008/autoMationCheckbox/index.html'),
        page_autoMationTableView.goto('http://localhost:1048/autoMationTableView/index.html')
    
    ])


    switch(commander.w){
        case 'AbsoluteLayout':
            await autoMationAbsoluteLayoutRunner(page_autoMationAbsolute);
            break;

        case 'Button':
            await autoMationButtonRunner(page_autoMationButton);
            break;

        case 'CheckBox':
            await autoMationCheckboxRunner(page_autoMationCheckbox);
            break;

        case 'TableView':
            await autoMationTableViewRunner(page_autoMationTableView);
            break;

        case 'all':

            await autoMationAbsoluteLayoutRunner(page_autoMationAbsolute);
            await autoMationButtonRunner(page_autoMationButton);
            await autoMationCheckboxRunner(page_autoMationCheckbox);
            await autoMationTableViewRunner(page_autoMationTableView);  
            break;


    }
}
mainRunner();