import { Component, Input, OnInit } from '@angular/core';
import { VisitorCounterService } from '../services/visitor-counter.service';

@Component({
  selector: 'app-application-footer',
  templateUrl: './application-footer.component.html',
  styleUrls: ['./application-footer.component.css']
})
export class ApplicationFooterComponent implements OnInit {
  @Input() title: string;
  visitorCount: number;

  constructor(private countService: VisitorCounterService) {}
  ngOnInit(): void {
    this.countService.getVisitorCount().then(data => this.visitorCount = data.Count);
    this.countService.updateVisitorCount();
  }
}
