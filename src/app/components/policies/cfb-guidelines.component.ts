import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfb-guidelines',
  templateUrl: './cfb-guidelines.component.html',
  styleUrls: ['./cfb-guidelines.component.css']
})
export class CfbGuidelinesComponent implements OnInit {
  title: string = "CfB's Guidelines and Policies";
  longText: string = "CfB’s RDM guidelines and policies are based on the DTU guidelines and policies for RDM. The difference lies in the specific considerations we have as a Life Science/Biotech center as well as the unique RDM infrastructure we have available. The DTU policies and guidelines can be found HERE";

  constructor() { }

  ngOnInit(): void {
  }

}
