import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'practica-final-curso-server-jon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  
  constructor(private swUpdate: SwUpdate){}

  ngOnInit(): void {
    this.checkVersionUpdates();
  }

  private checkVersionUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        if (event.current.appData) {
          const appData: any = event.current.appData;
          let msg = `Nueva versión ${appData.version} disponible.`;
          msg += `${appData.changelog}.`;
          msg += '¿Recargar ahora?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      });
    }
  }
}
