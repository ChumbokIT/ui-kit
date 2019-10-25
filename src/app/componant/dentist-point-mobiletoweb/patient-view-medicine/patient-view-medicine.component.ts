import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Pharmacies} from "../../../model/create-medicine";
import {PrescriptionService} from "../../../service/prescription.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-patient-view-medicine',
  templateUrl: './patient-view-medicine.component.html',
  styleUrls: ['./patient-view-medicine.component.css']
})
export class PatientViewMedicineComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  serverError = '';
  templateId: string;
  createMedicinePrescription: Array<Pharmacies> = [];
  selectedTemplateId: string;
  selectedTemplate: any;
  chiefComplain: string = '';
  parameters: string = '';
  remarks: string = '';
  dentalHistory: string = '';
  vaccinationHistory: string = '';
  investigation: string = '';
  radiological: string = '';
  planning: string = '';
  chiefComplainArray: Array<string> = [];
  onExaminationsParametersArray: Array<string> = [];
  onExaminationsRemarkArray: Array<string> = [];
  dentalHistoryArray: Array<string> = [];
  vaccinationHistoryArray: Array<string> = [];
  investigationArray: Array<string> = [];
  radiologicalArray: Array<string> = [];
  planningArray: Array<string> = [];


  constructor(private formBuilder: FormBuilder, private prescriptionService1: PrescriptionService,
              private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.templateId = params['id'];
    });
  }

  get f() {
    return this.form.controls;
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
      drugDuration: ['']

    });
    this.onPrescriptionView(this.templateId);
  }


  onPrescriptionView(selectedTemplateId) {


    this.prescriptionService1.getPatientPrescriptionView(selectedTemplateId).subscribe(res => {


      res.forEach((medicine) => {
        const createDrug: Pharmacies = new Pharmacies();
        createDrug.medicineType = medicine.medicineType;
        createDrug.name = medicine.name;
        createDrug.medicineStrength = medicine.medicineStrength;
        createDrug.noOfTime = medicine.noOfTime;
        createDrug.instruction = medicine.instruction;
        this.createMedicinePrescription.push(createDrug);

      });
    });
  }

}