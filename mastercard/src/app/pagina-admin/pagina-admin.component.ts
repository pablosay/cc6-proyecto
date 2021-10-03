import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-pagina-admin',
  templateUrl: './pagina-admin.component.html',
  styleUrls: ['./pagina-admin.component.scss']
})
export class PaginaAdminComponent implements OnInit {
  opened: boolean;
  constructor(private router:Router) {
    this.opened = false;
  }
  ngOnInit(): void {
  }
  goTo(ruta:string){
    this.router.navigateByUrl("pagadmin/"+ruta);
  }
}
