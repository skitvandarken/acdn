import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { CarroselComponent } from '../../layout/carrosel/carrosel.component';
import { VisaogeralComponent } from '../../layout/visaogeral/visaogeral.component';

@Component({
  selector: 'app-inicio',
  imports: [
MenuComponent, CarroselComponent, VisaogeralComponent

    
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
