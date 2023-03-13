import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timer = 0;
  running = true;
  inRun: string | number | NodeJS.Timeout | undefined;

  constructor() {
    this.Run();
  }
  Reset() {
    clearTimeout(this.inRun);
    this.running = false;
    this.timer = 0;
  }
  Pause() {
    this.running = false;
    clearTimeout(this.inRun);
  }
  Run() {
    this.running = true;
    this.inRun = setInterval(() => {
      this.timer += 1;
    }, 1000);
  }
}
