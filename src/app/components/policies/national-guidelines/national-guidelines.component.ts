import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-national-guidelines',
  templateUrl: './national-guidelines.component.html',
  styleUrls: ['./national-guidelines.component.css'],
})
export class NationalGuidelinesComponent implements OnInit {
  title: string = 'National Guidelines';
  longText: string =
    'Danish research should be performed in a culture where honesty, transparency and accountability are respected. The Code aims to ensure credibility, integrity and thereby quality in Danish research through common principles and standards for responsible conduct of research The Code is aimed at both public and private research institutions, including universities, the research council system, foundations and enterprises. It is a common framework meant to be implemented and developed across fields of research';
  longText2: string="Denmark’s National Strategy for Open Access forms the basis of work by the Ministry of Higher Education and Science with relation to research publications.The strategy states that the implementation of Open Access is to take place through the green model – i.e. parallel filling of quality-assured research articles in institutional or subject-specific archives (repositories) with Open Access. However, the strategy does not exclude the use of the golden model as long as it does not increase the expenses for publication.";
  constructor() {}

  ngOnInit(): void {}
}
