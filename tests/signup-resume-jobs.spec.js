import {test, expect} from "@playwright/test";
import { SignUpPage } from "./pages/sign-up.page";
import { faker } from "@faker-js/faker";
import { ResumeBuilderPage } from "./pages/resume-builder.page";
import 'dotenv/config';

test("Sign Up", async ({page}) => {
    
    const signUpPage = new SignUpPage(page);

    await signUpPage.goto();

    await page.getByRole('button', { name: 'No Thanks' }).click();

    await signUpPage.signUpBtn.click();
    await signUpPage.firstNameInput.click();
    await signUpPage.firstNameInput.fill(faker.person.firstName());
    
    await signUpPage.lastNameInput.click();
    await signUpPage.lastNameInput.fill(faker.person.lastName());

    await signUpPage.emailInput.click();
    await signUpPage.emailInput.fill(faker.internet.email());

    await signUpPage.passwordInput.click();
    await signUpPage.passwordInput.fill(faker.internet.password());
    

    
});

test('Create a Resume', async ({ page }) => {

    test.setTimeout(5 * 60 * 1000);
  await page.goto('https://app.kinobi.ai/id/students#public');

  await page.getByRole('button', { name: 'No Thanks' }).click();
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'Alamat Email' }).click();
  await page.getByRole('textbox', { name: 'Alamat Email' }).fill(process.env.EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD);

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('button', { name: 'Fitur' }).click();
  await page.getByRole('dialog').getByText('ATS CV Builder').click();
  await page.getByRole('button', { name: 'New Resume' }).click();

  await page.getByRole('textbox', { name: 'Retadha Rumi Indika Hidayat' }).click();
  await page.getByRole('textbox', { name: 'Retadha Rumi Indika Hidayat' }).fill("Rumi's CV");

  await page.getByRole('button', { name: 'Simpan', exact: true }).click();

  const resumeBuilderPage = new ResumeBuilderPage(page);
  
  await resumeBuilderPage.personalInfoForm.phoneNoInput.click();
  await resumeBuilderPage.personalInfoForm.phoneNoInput.fill(faker.phone.number());
  await resumeBuilderPage.personalInfoForm.linkedInInput.click();
  await resumeBuilderPage.personalInfoForm.linkedInInput.fill(faker.internet.url());
  await resumeBuilderPage.personalInfoForm.portofolioInput.click();
  await resumeBuilderPage.personalInfoForm.portofolioInput.fill(faker.internet.url());
  await resumeBuilderPage.personalInfoForm.addressInput.click();
  await resumeBuilderPage.personalInfoForm.addressInput.fill(faker.location.streetAddress({ useFullAddress: true }));
  await resumeBuilderPage.personalInfoForm.descriptionInput.click();
  await resumeBuilderPage.personalInfoForm.descriptionInput.fill(faker.word.words(5));

  await resumeBuilderPage.nextBtn.click();

  await resumeBuilderPage.professionalForm.expBtn.click();
  await resumeBuilderPage.professionalForm.companyInput.click();
  await resumeBuilderPage.professionalForm.companyInput.fill(faker.company.name());
  await resumeBuilderPage.professionalForm.roleInput.click();
  await resumeBuilderPage.professionalForm.roleInput.fill(faker.person.jobTitle());
  await resumeBuilderPage.professionalForm.locationInput.click();
  await resumeBuilderPage.professionalForm.locationInput.fill(faker.location.city());
  await resumeBuilderPage.professionalForm.descInput.click();
  await resumeBuilderPage.professionalForm.descInput.fill(faker.word.words(5));
  await resumeBuilderPage.professionalForm.startMonthInput.click();
  await page.getByRole('option', { name: 'Jun' }).click();
  await resumeBuilderPage.professionalForm.startYearInput.click();
  await page.getByRole('option', { name: '2024' }).click();
  await resumeBuilderPage.professionalForm.endMonthInput.click();
  await page.getByRole('option', { name: 'Apr' }).click();
  await resumeBuilderPage.professionalForm.endYearInput.click();
  await page.getByRole('option', { name: '2025' }).click();

  await resumeBuilderPage.nextBtn.click();

  await resumeBuilderPage.educationForm.eduBtn.click();
  await resumeBuilderPage.educationForm.schoolBtn.click();
  await page.getByText('Nanyang Technological').click();
  await resumeBuilderPage.educationForm.schoolLocationInput.click();
  await resumeBuilderPage.educationForm.schoolLocationInput.fill(faker.location.streetAddress({ useFullAddress: true }));
  await resumeBuilderPage.educationForm.startMonthInput.click();
  await page.getByRole('option', { name: 'Apr' }).click();
  await resumeBuilderPage.educationForm.startYearInput.click();
  await page.getByRole('option', { name: '2020' }).click();
  await resumeBuilderPage.educationForm.graduationMonthInput.click();
  await page.getByRole('option', { name: 'Jul' }).click();
  await resumeBuilderPage.educationForm.graduationYearInput.click();
  await page.getByRole('option', { name: '2025' }).click();
  await resumeBuilderPage.educationForm.eduLevelInput.click();
  await page.getByRole('option', { name: 'Bachelor' }).click();
  await resumeBuilderPage.educationForm.descInput.click();
  await resumeBuilderPage.educationForm.descInput.fill(faker.word.words(5));
  await resumeBuilderPage.educationForm.gpaInput.click();
  await resumeBuilderPage.educationForm.gpaInput.fill('4');
  await resumeBuilderPage.educationForm.maxGpaInput.click();
  await resumeBuilderPage.educationForm.maxGpaInput.fill('4');

  await resumeBuilderPage.nextBtn.click();

  await resumeBuilderPage.organizationForm.expBtn.click();
  await resumeBuilderPage.organizationForm.organizationEventInput.click();
  await resumeBuilderPage.organizationForm.organizationEventInput.fill(faker.company.name());
  await resumeBuilderPage.organizationForm.roleInput.click();
  await resumeBuilderPage.organizationForm.roleInput.fill(faker.person.jobTitle());
  await resumeBuilderPage.organizationForm.orgInput.click();
  await resumeBuilderPage.organizationForm.orgInput.fill(faker.word.words(5));
  await resumeBuilderPage.organizationForm.eventInput.click();
  await resumeBuilderPage.organizationForm.eventInput.fill(faker.word.words(5));
  await resumeBuilderPage.organizationForm.startMonthInput.click();
  await page.getByRole('option', { name: 'Mar' }).click();
  await resumeBuilderPage.organizationForm.startYearInput.click();
  await page.getByRole('option', { name: '2020' }).click();


  await resumeBuilderPage.nextBtn.click();

  await resumeBuilderPage.otherForm.expBtn.click();
  await resumeBuilderPage.otherForm.expOptionInput.click();
  await page.getByText('Projects', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Tahun' }).click();
  await resumeBuilderPage.otherForm.yearInput.click();
  resumeBuilderPage.otherForm.elaboration.click();
  resumeBuilderPage.otherForm.elaboration.fill(faker.word.words(5));
  await resumeBuilderPage.nextBtn.click();

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Selesai & Unduh' }).click();
  const download = await downloadPromise;
  
  await page.getByRole('button', { name: 'Start Your Journey' }).click();

  await expect(page.getByText(/Menampilkan \d+ lowongan/)).toBeVisible();

});