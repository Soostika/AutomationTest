class ContactPage {
  constructor(page) {
    this.page = page;

    this.nameInput = page.getByRole('textbox', { name: 'Full Name *' });
    this.emailInput = page.getByRole('textbox', { name: 'Email Address *' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone Number *' });
    this.courseDropdown = page.getByRole('combobox', { name: 'Interested Course' });
    this.messageInput = page.getByRole('textbox', { name: 'Your Message' });
    this.submitButton = page.getByRole('button', { name: 'Send Message' });
  }

  async fillContactForm(data) {
    await this.nameInput.fill(data.name, { timeout: 10000 });
    await this.emailInput.fill(data.email, { timeout: 10000 });
    await this.phoneInput.fill(data.phone, { timeout: 10000 });
    await this.messageInput.fill(data.message, { timeout: 10000 });

    await this.submitButton.click({ timeout: 10000 });
  }
}

module.exports = { ContactPage };