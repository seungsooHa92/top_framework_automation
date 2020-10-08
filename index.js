const fs = require('fs');
const util = require('util');
const path = require('path');
const puppeteer = require('puppeteer');
const {url_list} = require('./common.js');
const { url } = require('inspector');
const { Cluster } = require('puppeteer-cluster');

const {
    autoMationButtonRunner
} = require('./widget_/autoMationButtonRunner')
const {
    autoMationCheckboxRunner
} = require('./widget_/autoMationCheckboxRunner')
const mainRunner = async()=>{

    const browser = await puppeteer.launch({
                                                headless: false,
                                                args: ['--window-size=1920,1080']
                                           });
    const page = await browser.newPage();
    await page.setViewport({//set Page viewPort
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
    });

    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE, // which kind of concurrency
        maxConcurrency: 200, // number of parallel workers
    });

    const[ 
    page_autoMationButton,
    page_autoMationCheckbox
    ] = await Promise.all([browser.newPage(),browser.newPage()])

    await Promise.all([
        page_autoMationButton.goto('http://localhost:1000/autoMationButton/index.html'),
        page_autoMationCheckbox.goto('http://localhost:1001/autoMationCheckbox/index.html')
    ])
 
    await autoMationButtonRunner(page_autoMationButton)
    await autoMationCheckboxRunner(page_autoMationCheckbox)
}
mainRunner();