const puppeteer = require('puppeteer')
const {percySnapshot} = require('@percy/puppeteer')

describe('Percy Visual test',  ()=> {
    let browser,page
    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: true })
        page = await browser.newPage()
    })
    afterAll(async () => {
        page = await browser.close()
    })
    test('Full Page Percy Snapshot', async () => {
        await page.goto('https://google.com')
        await page.waitFor(1000)
        await percySnapshot(page,'Example page')
    }
    )
    test('Mobile snapshot',async () => {
        await page.goto('https://www.google.com')
        await page.waitForSelector('#hplogo')
        await page.emulate(puppeteer.devices['iPhone X'])
        await percySnapshot(page,'Mobile Page')

    })
    test('iPAD snapshot',async () => {
        await page.goto('https://www.google.com')
        await page.waitForSelector('#hplogo')
        await page.emulate(puppeteer.devices['iPad landscape'])
        await percySnapshot(page,'Ipad Page')

    })

});
