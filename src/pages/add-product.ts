import { Locator, Page } from "@playwright/test";
import { locators } from "./Locators/locators";
import { basePage } from "../base/base-page";

export class Addproduct extends basePage{

    readonly page: Page;
    readonly product:Locator
    readonly addTocart:Locator
    readonly checkOut:Locator
    constructor(page)
    {

        super(page)
    }

    async addAproduct()
    {
        await super.clickByText(locators.product);        
        await super.waitAndClick(locators.addTocart);
        await super.waitAndClick(locators.signInbutton);
    }
}