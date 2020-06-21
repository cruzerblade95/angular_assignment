import { Component, OnInit, ViewChild } from '@angular/core';
import {CrudService} from '../services/crud.service';
import { Bmipersons } from '../.model/bmipersons';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public products: Bmipersons [];
  public dataTable: any;
  public dtOptions;
  public tableElement: any;
  @ViewChild('peopleTable', {static: false}) Table;
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.crudService.getProducts().subscribe(data => {
      this.products = data;
    }, err => {}, () => {
      setTimeout(() => {
        this.dataTable = $(this.Table.nativeElement);
        this.tableElement = this.dataTable.DataTable(this.dtOptions);
      }, 1000);
    });
  }

  clickBack(){
    this.router.navigate(['']);
  }

}
