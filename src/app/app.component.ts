import { Component, OnInit } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly gtmService: GoogleTagManagerService,
  ) { }

  ngOnInit() {
    this.gtmService.addGtmToDom();
  }
}
