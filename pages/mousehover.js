import { expect } from "@playwright/test";

export class MouseHoverPage {
    constructor(page) {
        this.page = page;
        this.pointMeButton = page.getByRole('button', { name: 'Point Me' });
        this.laptopOption = page.getByRole('link', { name: 'Laptop' });
    }

    async goto() {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async hoverPointMe() {
        await this.pointMeButton.hover();
    }
    

    async clickLaptop() {
        await this.laptopOption.click();
    }
   
}