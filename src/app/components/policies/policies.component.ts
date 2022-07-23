import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css'],
})
export class PoliciesComponent implements OnInit {
  title: string = 'RDMS Policies';
  longText: string =
    'CfB’s RDM guidelines and policies are based on the DTU guidelines and policies for RDM. The difference lies in the specific considerations we have as a Life Science/Biotech center as well as the unique RDM infrastructure we have available. The DTU policies and guidelines can be found HERE';
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
