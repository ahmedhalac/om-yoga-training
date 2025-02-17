import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { SwiperDirective } from './directives/swiper.directive';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TestimonialCardComponent,
    SwiperDirective,
    AccordionComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SwiperDirective,
    TestimonialCardComponent,
    AccordionComponent,
  ],
})
export class SharedModule {}
