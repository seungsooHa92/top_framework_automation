const {

pngfilePath,
enter_function,
exit_function,
selectorClickFunc,
selectorDblClickFunc
} = require('../common.js');

const autoMationTableViewRunner = async(page)=>{
    enter_function(page,`TableView`,48);
    await page.waitForTimeout(700);

    let event_tc = [];
    /*
        how to get Value from page.evaluate()
    */
    /* 
    1. 
    const getData = async ()=>{
        return await page.evaluate(async()=>{
            return await new Promise((resolve,reject)=>{
                
                resolve(tableview.event_tc)
            })
        })
    }
    */
    const getData = await page.evaluate(()=>{
        return Promise.resolve(tableview.event_tc);
    })
    event_tc = await getData;
    console.log(event_tc);

 
   selectorClickFunc(page,'#eventButton',3,500); // eventButtonClick
    await page.waitForSelector('#event_1');
    
    /* 
        event_1 page에서 테스트할 이벤트 

        cell row  header click dblclick

    */
    selectorClickFunc(page,'#event_1',3,500); // event_1 button Click
    await page.waitForTimeout(700);

    let tdSelector = `#TopTables_Table_TableView61_wrapper > div.top-tableview-scroll > div.top-tableview-scrollBody-border > div.top-tableview-scrollBody > table > tbody > tr.body-row.row_1.read.rowIndex_1.odd > td.body-cell.column_0`;
    selectorClickFunc(page,tdSelector,3,500); //tdCell Click
    await page.waitForTimeout(700);

    let thSelector = `#header_1`;
    selectorClickFunc(page,thSelector,3,500);
    await page.waitForTimeout(700);


    let td2 = `#TopTables_Table_TableView61_wrapper > div.top-tableview-scroll > div.top-tableview-scrollBody-border > div.top-tableview-scrollBody > table > tbody > tr.body-row.row_3.read.rowIndex_3.odd > td.body-cell.column_1`
    selectorDblClickFunc(page,td2,3,500); // td Double Clicked -> Log는 남는데 TOP 에서 Event CallBack이 안불림 ...;
    let th2 = `#header_2`
    await page.waitForTimeout(700);
    selectorDblClickFunc(page,th2,3,500);  // th Double Clicked -> Log는 남는데 TOP 에서 Event CallBack이 안불림 ...;

    await page.waitForTimeout(700);

    /*
    event_2 page에서 테스트할 이벤트 

    check event 검출    
    */
    
    selectorClickFunc(page,'#event_2',3,500);
    await page.waitForSelector('#TableView62'); // event_2 클릭시 하위 html 파일이 변경되므로 waitForSelector를 통한 붙여질 페이지 내의 selector를 기다림
    
    let checkboxSelector = `#TableView62_ColumnItem1_CheckBox_2_0 > label > i`; //checkbox selector
    selectorClickFunc(page,checkboxSelector,3,500);
    await page.waitForTimeout(700);

    let headerCheckBoxSelector = `#TableView62_HeaderColumn0_HeaderCheckBox > label > i`; 
    selectorClickFunc(page,headerCheckBoxSelector,3,500);
    await page.waitForTimeout(700);

    
    const getPoint = await page.evaluate(()=>{

        let returnPoint = {
            _x: '',
            _y: ''
        }
        let scroll_div = document.getElementById('scroll_scrollTableView'); 
        scroll_div.addEventListener('click',(e)=>{
            
        })


    })
    event_tc = await getData;
    console.log(event_tc);







    exit_function(`TableView`);
}
module.exports = {
   autoMationTableViewRunner
}