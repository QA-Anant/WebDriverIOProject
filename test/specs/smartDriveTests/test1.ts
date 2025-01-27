describe('Practising with WebdriverIO', () => {

    it("Login Test", async () => { 
        console.log('Login to User Console Application')
        await browser.url('/login')
        await browser.pause(2000)
        await browser.$("//input[@id='login_id']").setValue("anant.sdsiqa")
        await browser.$("//button[1]").click()
        await browser.pause(2000)
        await browser.$("//input[@id='company_name']").setValue("Miles Ahead TE-PROD")
        await browser.$("//input[@id='login_id']").setValue("anant.miles")
        await browser.$("//input[@name='ctl00$ContentPlaceHolder1$password']").setValue("test@123")
        await browser.$("//button[@type='submit']").click()
        // validate the title of the page
        const PageTitle = await browser.getTitle()
        console.log('Page Title: ' + PageTitle)
    })

    it("Click on My Account Link", async () => {
        console.log('Click on My Account Link')
        await browser.pause(2000)
        await browser.$("(//a[@href='/UserAccount/MyAccount'])[2]").click()
        await browser.pause(2000)
        // validate the title of the page
        const PageTitle = await browser.getTitle()
        console.log('Page Title: ' + PageTitle)
    })

})
