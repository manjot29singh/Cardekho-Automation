const pup = require("puppeteer");

async function main(){
    let browser = await pup.launch({
        headless : false,
        defaultViewport : false,
        args : ["--start-maximized"]
    });
    let webpage = await browser.pages();
    let tab = webpage[0];

    await tab.goto("https://www.cardekho.com/");
    await tab.waitForSelector("#cardekhosearchtext" ,{visible : true} );
    await tab.click("#cardekhosearchtext");
    await tab.keyboard.type("TATA HARRIER");
    await tab.waitForTimeout("1000");
    await tab.keyboard.press("Enter");
    await tab.waitForNavigation({ waitUntil : "networkidle0"});

    await tab.waitForSelector('a[title="Tata Harrier XE"]', {visible : true});
    let model = await tab.$$('a[title="Tata Harrier XE"]');
    await model[0].click();
     await tab.waitForTimeout("2000");

     await tab.waitForSelector(".marginBottom20.shadow24.variantPriceTable.contantVisable");
     await tab.click(".marginBottom20.shadow24.variantPriceTable.contantVisable");
     await tab.waitForTimeout("3000");


    await tab.goto("https://www.axisbank.com/retail/calculators/car-loan-emi-calculator");
    await tab.waitForTimeout("3000");
    await tab.waitForSelector(".inpt.inputBox.numbersOnly.loanAmt");
    await tab.click(".inpt.inputBox.numbersOnly.loanAmt");
    for(let i=0;i<10;i++){
        await tab.keyboard.press("Backspace");

    }
    
    await tab.keyboard.type("1674029");

    await tab.waitForSelector(".inputBox.inpt.numbersDecimal");
    await tab.click(".inputBox.inpt.numbersDecimal");
    await tab.keyboard.press("Backspace");
    await tab.keyboard.press("Backspace");
    await tab.keyboard.type("9.8");



    await tab.waitForSelector(".inpt-statement.tenure .inputBox.inpt.numbersOnly");
    await tab.click(".inpt-statement.tenure .inputBox.inpt.numbersOnly");
    await tab.keyboard.press("Backspace");
    await tab.keyboard.type("5");
    

    await tab.waitForSelector(".tabHeading");
    await tab.click(".tabHeading");
}
main();

