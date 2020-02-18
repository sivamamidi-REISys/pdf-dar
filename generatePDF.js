const puppeteer = require('puppeteer')

async function printPDF() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const url = 'https://grants.hrsa.gov/2010/WebEPSExternal/Interface/Common/AccessControl/Login.aspx';
    await page.goto(url, { waitUntil: 'networkidle0' });
    let d = new Date();
    let n = d.getTime();
    const pdf = await page.pdf({ format: 'A4', path: `temp/test_${n}.pdf` });

    await browser.close();
    return pdf
}

printPDF();