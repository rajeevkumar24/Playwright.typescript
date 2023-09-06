import { expect, type Locator, type Page } from '@playwright/test';
import { locators } from './Locators/locators';
import { basePage } from '../base/base-page';

export class LoginPage extends basePage{
   readonly page: Page;
   readonly userName: Locator;
   readonly passWord: Locator;
   readonly loginButton: Locator;

   constructor(page) {
		super(page)
	}


   async logintoPage(username, password) {
      await super.waitAndFill(locators.userName,username);
      await super.waitAndFill(locators.password,password);
      await super.waitAndClick(locators.signInbutton);
   }

}