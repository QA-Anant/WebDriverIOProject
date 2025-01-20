import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        // add a popup to the page and close it 
        await browser.execute('window.open("https://www.google.com")')
        await browser.switchWindow('https://www.google.com')
        await browser.closeWindow()
        await browser.switchWindow('https://the-internet.herokuapp.com/secure')
    })
})

describe('My Login application', () => {
    xit('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('AnantJain', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})

