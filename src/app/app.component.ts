import {Component, inject, OnInit, PLATFORM_ID, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestCmp} from "./test-cmp";
import {LoggedCmp} from "./logged-cmp";
import {isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestCmp, LoggedCmp],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  platformId = inject(PLATFORM_ID);
  isAuthenticated = signal<boolean>(false);

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    setTimeout(() => this.isAuthenticated.set(true), 300);
  }
}
