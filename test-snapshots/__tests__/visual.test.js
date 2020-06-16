
const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })


describe('Visual Regresion testing',  () => {
	let browser, page
	beforeAll(async () => {
		browser = await puppeteer.launch({ headless: true })
		page = await browser.newPage()
	})
	afterAll(async () => {
		page = await browser.close()
	})
	test('Full page snapshot', async () => {
		await page.goto('https://www.google.com')
		await page.waitFor(2000)
		const image = await page.screenshot()
		expect(image).toMatchImageSnapshot({
			failureTresholdType: 'pixel',
			failureTreshold: 500,
		})
	})
})
