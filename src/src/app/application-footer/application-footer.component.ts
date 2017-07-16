import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-application-footer',
  templateUrl: './application-footer.component.html',
  styleUrls: ['./application-footer.component.css']
})
export class ApplicationFooterComponent {
  @Input()
  title: string;
}
