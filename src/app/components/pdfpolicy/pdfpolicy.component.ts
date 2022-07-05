import { Component, OnInit } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdfpolicy',
  templateUrl: './pdfpolicy.component.html',
  styleUrls: ['./pdfpolicy.component.css']
})
export class PdfpolicyComponent implements OnInit {
src =  "./assets/CfB_RDMpolicy_summary_202003.pdf";

  constructor() { }
  ngOnInit(): void {
  }

}
