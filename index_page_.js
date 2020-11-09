const createPage = async()=>{

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


    await autoMationAbsoluteLayoutRunner(page_autoMationAbsolute);
    await autoMationButtonRunner(page_autoMationButton);
    await autoMationCheckboxRunner(page_autoMationCheckbox);
    await autoMationTableViewRunner(page_autoMationTableView);    

}

module.exports= {
    createPage
}