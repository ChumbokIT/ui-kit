import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CreatePrescription} from '../../../model/create-prescription';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrescriptionService} from '../../../service/prescription.service';
import {CreateDrug} from '../../../model/create-medicine';
import {Template} from '../../../model/template';
import {TemplateService} from '../../../service/template.service';


@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {

  selectedTemplate: any;
  selectedTemplateId: string;
  templateList: Template[];
  prescriptionResp: any;
  form: FormGroup;
  submitted = false;
  serverError = '';
  medicineList: CreateDrug[] = [];
  public show_dialog: boolean = false;
  public profileView: boolean = false;
  public show_previousPrescription: boolean = false;
  patientId: string;
  patientName: string;
  phoneNumber: string;
  address: string;
  date: string;
  prescriptionListin: Array<any> = [];
  prescription: any;
  itemFrom: number;
  itemTo: number;
  totalElements: number;
  config: any;

  constructor(private formBuilder: FormBuilder, private prescriptionService: PrescriptionService, private templateService: TemplateService,
              private route: ActivatedRoute, private router: Router) {

    this.config = {
      currentPage: 1,
      itemsPerPage: 5
    };
    this.route.queryParamMap
      .map(params => params.get('page'))
      .subscribe(page => this.config.currentPage = page);
    this.route.params.subscribe(params => {
      this.patientId = this.route.snapshot.queryParams['patientId'];
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      chiefComplain: ['', Validators.required],
      parameters: [''],
      remarks: [''],
      dentalHistory: [''],
      vaccinationHistory: [''],
      investigation: [''],
      radiological: [''],
      planning: [''],
      drugType: [''],
      medicineName: [''],
      drugStrength: [''],
      drugDose: [''],
      drugDuration: [''],
      patientName: [''],
      phoneNumber: [''],
      address: [''],
      date: ['']
    });
    this.templateService.getTemplateView().subscribe(res => {
      this.prescriptionResp = res;
      this.templateList = [];
      res['items'].forEach((template) => {
        const t = new Template();
        t.id = template.id;
        t.templateName = template.templateName;
        this.templateList.push(t);
      });
    });
    this.onPatientView();
    this.selectPatient(this.patientId);
  }

  get f() {
    return this.form.controls;
  }

  dateFetching() {
    this.date = this.form.controls['date'].value;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return true;
    }
    const prescription: CreatePrescription = new CreatePrescription();
    prescription.patientId = this.patientId;
    prescription.chiefComplain = this.form.controls['chiefComplain'].value;
    prescription.parameters = this.form.controls['parameters'].value;
    prescription.remarks = this.form.controls['remarks'].value;
    prescription.dentalHistory = this.form.controls['dentalHistory'].value;
    prescription.vaccinationHistory = this.form.controls['vaccinationHistory'].value;
    prescription.investigation = this.form.controls['investigation'].value;
    prescription.radiological = this.form.controls['radiological'].value;
    prescription.planning = this.form.controls['planning'].value;
    this.phoneNumber = this.form.controls['phoneNumber'].value;
    this.patientName = this.form.controls['patientName'].value;
    this.address = this.form.controls['address'].value;
    const createDrug: CreateDrug = new CreateDrug();
    createDrug.drugType = this.form.controls['drugType'].value;
    createDrug.medicineName = this.form.controls['medicineName'].value;
    createDrug.drugStrength = this.form.controls['drugStrength'].value;
    createDrug.drugDose = this.form.controls['drugDose'].value;
    createDrug.drugDuration = this.form.controls['drugDuration'].value;
    prescription.createMedicinePrescription.push(createDrug);
    this.prescriptionService.createPrescription(
      prescription.patientId,
      prescription.chiefComplain,
      prescription.parameters,
      prescription.remarks,
      prescription.dentalHistory,
      prescription.vaccinationHistory,
      prescription.investigation,
      prescription.radiological,
      prescription.planning,
      this.phoneNumber,
      this.patientName,
      this.address,
      this.date,
      this.medicineList).subscribe(res => {

    }, error => {
      if (error.status === 400) {
        this.serverError = error.error.message;
      }
    });
  }

  addMedicine() {
    const createDrug: CreateDrug = new CreateDrug();
    createDrug.drugType = this.form.controls['drugType'].value;
    createDrug.medicineName = this.form.controls['medicineName'].value;
    createDrug.drugStrength = this.form.controls['drugStrength'].value;
    createDrug.drugDose = this.form.controls['drugDose'].value;
    createDrug.drugDuration = this.form.controls['drugDuration'].value;
    this.medicineList.push(createDrug);

  }

  selectTemplate(selectedTemplateId) {

    this.templateService.getTemplateView().subscribe(res => {

      this.selectedTemplateId = selectedTemplateId;
      this.selectedTemplate = res['items'].find(template => template.id === selectedTemplateId);
      this.form.controls['chiefComplain'].setValue(this.selectedTemplate.chiefComplain);
      this.form.controls['parameters'].setValue(this.selectedTemplate.parameters);
      this.form.controls['remarks'].setValue(this.selectedTemplate.remarks);
      this.form.controls['dentalHistory'].setValue(this.selectedTemplate.dentalHistory);
      this.form.controls['vaccinationHistory'].setValue(this.selectedTemplate.vaccinationHistory);
      this.form.controls['investigation'].setValue(this.selectedTemplate.investigation);
      this.form.controls['radiological'].setValue(this.selectedTemplate.radiological);
      this.form.controls['planning'].setValue(this.selectedTemplate.planning);

      this.medicineList = [];
      this.selectedTemplate['medicines'].forEach((medicine) => {
        const createDrug: CreateDrug = new CreateDrug();
        createDrug.drugType = medicine.drugType;
        createDrug.medicineName = medicine.medicineName;
        createDrug.drugStrength = medicine.drugStrength;
        createDrug.drugDose = medicine.drugDose;
        createDrug.drugDuration = medicine.drugDuration;
        this.medicineList.push(createDrug);
      });
    });
  }

  onCancel() {
    this.router.navigate(['doctors/calendar-view']);
  }

  deleteTemplate(templateId) {
    this.templateService.deleteTemplate(templateId).subscribe(res => {
      //    console.log(res['items']);
    });
  }

  editTemplate(templateId) {
    this.router.navigate(['doctors/' + 'template/' + templateId + '/edit-template']);
  }

  onPatientView() {
    if (this.patientId) {
      this.profileView = !this.profileView;
      this.show_dialog = this.show_dialog;
      this.show_previousPrescription = !this.show_previousPrescription;
    }
    else {
      this.show_dialog = !this.show_dialog;
      this.profileView = this.profileView;
      this.show_previousPrescription = this.show_previousPrescription;
    }
  }

  selectPatient(patientId) {

    this.prescriptionService.getPatientProfile(patientId).subscribe(res => {
      res.items.forEach((patientInformation) => {
       if(patientInformation.id==patientId){
         this.patientName = patientInformation.patientName;
         this.phoneNumber = patientInformation.phnNo;
         this.address = patientInformation.address;
       }
      });
    });
  }

  previousPrescriptionView() {
    this.pageChange(this.patientId, 1);

  }


  pageChange(patientId, newPage: number) {

    this.prescriptionListin = [];
    this.prescriptionService.getPrescriptionList(patientId, newPage).subscribe(res => {

      console.log(newPage);
      res.items.forEach((patientPrescription) => {

        if (patientPrescription.id == patientId) {
          this.prescription = res;
          this.itemFrom = this.prescription.page + 1;
          this.itemTo = (this.prescription.page + 1) * this.prescription.size;
          this.totalElements = this.prescription.totalElements;
          this.prescriptionListin.push(patientPrescription);
          //this.router.navigate(['doctors/prescription-list'], {queryParams: {page: newPage}});
          console.log(patientPrescription);
        }
      });

    });
  }


  onPrescriptionView(prescriptionId) {
    this.router.navigate(['doctors/' + 'prescription/' + prescriptionId + '/prescription-view']);
  }
}
