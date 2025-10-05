export class SignUpPage {
    

  constructor(page) {

    this.page = page;
    this.signUpBtn = page.getByRole('button', { name: 'Sign Up For Free' });
    this.firstNameInput = page.getByRole('textbox', { name: 'Nama Depan' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Nama Belakang' });
    this.emailInput = page.getByRole('textbox', { name: 'Alamat Email' });
    this.verifyBtn = page.getByRole('button', { name: 'Verify' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });

    }

  async goto() {
    await this.page.goto("https://app.kinobi.ai/id/students");
  }


}