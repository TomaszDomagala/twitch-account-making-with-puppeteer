const login = 'loginsiema1234'
const password = 'passwordsiema1234'
const email = 'loginsiema1234@gmail.com'
const bDay = '21'
const bYear = '1999'


const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  const navigationPromise = page.waitForNavigation()

  await page.setViewport({ width: 1200, height: 800 })

  await page.goto('https://www.twitch.tv/')

  await navigationPromise

  
  await ss(page)

  await page.waitForSelector('#root > .tw-absolute > .tw-flex > .tw-flex-shrink-0 > .gdpr-consent-banner')
  await page.click('#root > .tw-absolute > .tw-flex > .tw-flex-shrink-0 > .gdpr-consent-banner')
  
  await page.waitForSelector('.top-nav__nav-items-container > .anon-user > .tw-mg-r-1:nth-child(2) > .tw-interactive > .tw-button__text')
  await page.click('.top-nav__nav-items-container > .anon-user > .tw-mg-r-1:nth-child(2) > .tw-interactive > .tw-button__text')
  

  await ss(page)
  await page.waitForSelector('.tw-c-background-base > .tw-mg-t-2:nth-child(1) > div > .tw-relative > .tw-block')
  await page.click('.tw-c-background-base > .tw-mg-t-2:nth-child(1) > div > .tw-relative > .tw-block')
  await page.type('.tw-c-background-base > .tw-mg-t-2:nth-child(1) > div > .tw-relative > .tw-block', login)

  await ss(page)
  await page.waitForSelector('.tw-c-background-base > .tw-mg-t-2:nth-child(4) > div > .tw-relative > .tw-block')
  await page.click('.tw-c-background-base > .tw-mg-t-2:nth-child(4) > div > .tw-relative > .tw-block')
  await page.type('.tw-c-background-base > .tw-mg-t-2:nth-child(4) > div > .tw-relative > .tw-block', email)

  await ss(page)
  await page.waitForSelector('.tw-mg-t-2 > div > .password-input__container > .tw-relative > .tw-block')
  await page.click('.tw-mg-t-2 > div > .password-input__container > .tw-relative > .tw-block')
  await page.type('.tw-mg-t-2 > div > .password-input__container > .tw-relative > .tw-block', password)

  await ss(page)
  await page.waitForSelector('div > .tw-flex > .birthday-picker__input:nth-child(1) > .tw-relative > .tw-block')
  await page.click('div > .tw-flex > .birthday-picker__input:nth-child(1) > .tw-relative > .tw-block')
  await page.type('div > .tw-flex > .birthday-picker__input:nth-child(1) > .tw-relative > .tw-block', bDay)

  await ss(page)
  await page.waitForSelector('.tw-mg-t-2 > div > .tw-flex > .tw-full-width > .tw-block')
  await page.click('.tw-mg-t-2 > div > .tw-flex > .tw-full-width > .tw-block')

  await ss(page)
  await page.select('.tw-mg-t-2 > div > .tw-flex > .tw-full-width > .tw-block', '3')

  await ss(page)
  await page.waitForSelector('.tw-mg-t-2 > div > .tw-flex > .tw-full-width > .tw-block')
  await page.click('.tw-mg-t-2 > div > .tw-flex > .tw-full-width > .tw-block')

  await ss(page)
  await page.waitForSelector('div > .tw-flex > .birthday-picker__input:nth-child(3) > .tw-relative > .tw-block')
  await page.click('div > .tw-flex > .birthday-picker__input:nth-child(3) > .tw-relative > .tw-block')
  await page.type('div > .tw-flex > .birthday-picker__input:nth-child(3) > .tw-relative > .tw-block', bYear)



  await delay(400)

  await ss(page)
  await page.waitForSelector('form > .tw-c-background-base > .tw-mg-t-2 > .tw-interactive > .tw-button__text')
  await page.click('form > .tw-c-background-base > .tw-mg-t-2 > .tw-interactive > .tw-button__text')

  await ss(page)



  // await browser.close()
})()

let screenshotsNumber = 0
const ss = async page => {
  await page.screenshot({ path: `screenshots/screenshot_${screenshotsNumber}.png` })
  screenshotsNumber++
}

function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}