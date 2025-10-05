export class ResumeBuilderPage {
    

  constructor(page) {

    this.page = page;
    this.personalInfoForm = new PersonalInfoForm(page);
    this.professionalForm = new ProfessionalForm(page);
    this.educationForm = new EducationForm(page);
    this.organizationForm = new OrganizationForm(page);
    this.otherForm = new OtherForm(page);
    this.nextBtn = page.getByRole('button', { name: 'Simpan & Lanjutkan' });

    }

  async goto() {
    await this.page.goto("https://app.kinobi.ai/id/students");
  }


}

export class PersonalInfoForm {
    
  constructor(page) {

    this.page = page;
    
    this.phoneNoInput = page.getByRole('textbox', { name: 'Nomor Handphone (Mobile)' });
    this.linkedInInput = page.getByRole('textbox', { name: 'Linkedin Profile URL' });
    this.portofolioInput = page.getByRole('textbox', { name: 'Portfolio/Website URL (' });
    this.addressInput = page.getByRole('textbox', { name: 'Alamat (opsional)' });
    this.descriptionInput = page.getByRole('textbox', { name: 'Deskripsi singkat tentang kamu' });
    
    }

};

export class ProfessionalForm {
    
  constructor(page) {

    this.page = page;
    this.expBtn = page.getByRole('button', { name: 'Add experience' });
    this.companyInput = page.getByRole('textbox', { name: 'Nama Perusahaan' });
    this.roleInput = page.getByRole('textbox', { name: 'Jabatan/Magang/Posisi Lokasi' });
    this.locationInput = page.getByRole('textbox', { name: 'Enter company location, e.g.' });
    this.descInput = page.getByRole('textbox', { name: 'Deskripsi Perusahaan (' });
    this.startMonthInput = page.getByRole('textbox', { name: 'Tanggal Mulai (Bulan)' });
    this.startYearInput = page.getByRole('textbox', { name: 'Tanggal Mulai (Tahun)' });
    this.endMonthInput = page.getByRole('textbox', { name: 'Tanggal Selesai (Bulan)' });
    this.endYearInput = page.getByRole('textbox', { name: 'Tanggal Selesai (Tahun)' });
    
    }

};

export class EducationForm {
    
  constructor(page) {

    this.page = page;
    this.eduBtn = page.getByRole('button', { name: 'Add education' });
    this.schoolBtn = page.getByRole('textbox', { name: 'Nama Sekolah/Universitas' });
    this.schoolLocationInput = page.getByRole('textbox', { name: 'Lokasi Sekolah/Universitas' });
    this.startMonthInput = page.getByRole('textbox', { name: 'Select start date (month)' });
    this.startYearInput = page.getByRole('textbox', { name: 'Select start date (year)' });
    this.graduationMonthInput = page.getByRole('textbox', { name: 'Tanggal Kelulusan (Bulan)' });
    this.graduationYearInput = page.getByRole('textbox', { name: 'Tanggal Kelulusan (Tahun)' });
    this.eduLevelInput = page.getByRole('textbox', { name: 'Education Level' });
    this.descInput =page.getByRole('textbox', { name: 'Enter description, e.g.' });
    this.gpaInput =page.getByRole('spinbutton', { name: 'IPK (Opsional namun' });
    this.maxGpaInput =page.getByRole('spinbutton', { name: 'IPK Maksimal' });
     
    }

};

export class OrganizationForm {
    
  constructor(page) {

    this.page = page;
    this.expBtn =page.getByRole('button', { name: 'Add experience' });
    this.organizationEventInput =page.getByRole('textbox', { name: 'Organisasi/Nama Acara' });
    this.roleInput =page.getByRole('textbox', { name: 'Posisi/Gelar Jabatan' });
    this.orgInput =page.getByRole('textbox', { name: 'Enter organisation' });
    this.eventInput =page.getByRole('textbox', { name: 'Aktivitas/Acara/Lokasi' });
    this.startMonthInput =page.getByRole('textbox', { name: 'Select start date (month)' });
    this.startYearInput = page.getByRole('textbox', { name: 'Select start date (year)' });
    
}

};

export class OtherForm {
    
  constructor(page) {

    this.page = page;
    this.expBtn = page.getByRole('button', { name: 'Add experience' });
    this.expOptionInput = page.getByRole('textbox', { name: 'Kategori/Proyek/Aktivitas' });
    this.yearInput = page.getByRole('textbox', { name: 'Tahun' });
    this.elaboration = page.getByRole('textbox', { name: 'Enter elaboration' });

    }



};