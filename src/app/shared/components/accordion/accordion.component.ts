import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() question: string | undefined;
  @Input() answer: string | undefined;
  isExpanded = false;

  toggleAccordion(): void {
    this.isExpanded = !this.isExpanded;
  }
}
