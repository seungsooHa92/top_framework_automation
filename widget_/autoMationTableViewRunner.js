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
    selectorClickFunc(page,'#eventButton',3,500); // eventButtonClick
    await page.waitForSelector('#event_1');
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













    exit_function(`TableView`);
}
module.exports = {
   autoMationTableViewRunner
}