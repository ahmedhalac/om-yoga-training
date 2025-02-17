import { Component } from '@angular/core';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { FAQs } from 'src/app/core/types';
import { faqs } from 'src/app/shared/constants';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  faqs: FAQs[] = faqs;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.scrollToTop();
  }
}
