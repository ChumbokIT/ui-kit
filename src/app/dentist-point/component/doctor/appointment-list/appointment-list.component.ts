import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppointmentService} from '../../../service/appointment.service';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

export class AppointmentListComponent implements OnInit {
  prescription: any;
  patientId: string;
  totalElements: number;
  config: any;
  searchText;
  patientName: string;
  appointmentList: Array<any> = [];

  constructor(private appointmentService: AppointmentService,
              private route: ActivatedRoute,
              private router: Router) {

    this.config = {
      currentPage: 1,
      itemsPerPage: 5
    };

    this.route.queryParamMap
      .map(params => params.get('page'))
      .subscribe(page => this.config.currentPage = page);
  }

  pageChange(newPage: number) {

    this.router.navigate(['dentist-point/doctors/appointment-list'], {queryParams: {page: newPage}});
    this.appointmentService.getAppointmentListByDoctorId().subscribe(res => {
      this.appointmentList = [];
      res.forEach((values) => {
        this.appointmentList.push(values);
      });
    });
  }

  ngOnInit() {

    this.pageChange(1);
    this.appointmentService.getAppointmentListByDoctorId().subscribe(res => {
      this.appointmentList = [];
      res.forEach((values) => {
        this.appointmentList.push(values);
      });
    });
  }

  onAppointmentDelete(appointmentId) {
    this.appointmentService.deleteAppointment(appointmentId).subscribe(res => {
    });
  }


}
