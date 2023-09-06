
import { type Page } from '@playwright/test'

export class basePage
{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
     }
     async open(url) {
		await this.page.goto(url)
	}

	async getTitle() {
		return await this.page.title()
	}

	async getUrl() {
		return this.page.url()
	}

	async wait() {
		return this.page.waitForTimeout(10000)
	}
    async waitAndFill(selector, text) {
		await this.page.waitForSelector(selector)
		await this.page.fill(selector, text)
	}
    async waitAndClick(selector) {
		await this.page.waitForSelector(selector)
		return await this.page.click(selector)
	}
    async clickByText(selector) {
        return await this.page.getByText(selector).click()
		
	}
}