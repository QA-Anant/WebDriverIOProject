import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Practising with WebdriverIO', () => {
    it("TC1", async () => { 
        console.log('Executing TC1')
        await browser.url('https://demo.evershop.io/account/login')
        await browser.$('input[name="email"]').setValue('jain.anant4567@gmail.com')
        await browser.$('input[name="password"]').setValue('test@123')
        await browser.$('button[type="submit"]').click()
    })
})
