import { test, expect, Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { LoginPage } from '../src/pages/login-page';
import { Env } from '../src/common/env-page';
import { Addproduct } from '../src/pages/add-product';
import * as data from '../src/settings.json';

let browser: Browser;
let context: BrowserContext;
let page:Page;

//pages
let login:LoginPage
let addProduct:Addproduct

test.beforeAll(async () => {
    browser = await chromium.launch({
        headless :false
    })
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto(Env.url)    


})

test('Login to SwagLabs',async ({page}) =>{
    const Login = new LoginPage(page);
   
    await Login.logintoPage(data.username,data.password);
    await expect(page.getByText("Sauce Labs Bolt T-Shirt",{exact:true})).toBeVisible();

});

test('Add a product',async ({page}) =>{
    const Login = new LoginPage(page);
    const addProduct = new Addproduct(page);
    await Login.gotoPage(Env.url)  ;
    await Login.logintoPage('standard_user','secret_sauce');
    await addProduct.addAproduct();
    await expect(page.getByText("Sauce Labs Backpack",{exact:true})).toBeVisible();

});

