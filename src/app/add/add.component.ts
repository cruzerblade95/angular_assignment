import { Component, OnInit } from '@angular/core';
import {CrudService} from "../services/crud.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public Name: string;
  public Weight: number;
  public Height: number;
  public BMI: number;

  public dWeight: string;
  public dHeight: string;
  public dBMI: string;
  public Category: string;

  
  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.dWeight = this.Weight.toString();
    this.dHeight = this.Height.toString();
    this.BMI = this.Weight / this.Height * this.Height; 
    this.dBMI = this.BMI.toString();

    if(this.BMI >= 29.9){
      this.Category = "Obese";
    }else if(this.BMI >= 25 && this.BMI < 29.9){
      this.Category = "Overweight";
    }else if(this.BMI >= 18.5 && this.BMI < 29.9){
      this.Category = "Normal";
    }else if(this.BMI < 18.5){
      this.Category = "Underweight";
    }

    const productData = new FormData();
    productData.append('Name', this.Name);
    productData.append('Weight', this.dWeight);
    productData.append('Height', this.dHeight);
    productData.append('BMI', this.dBMI);
    productData.append('Category', this.Category);
    this.crudService.createProduct(productData).subscribe(result => {
      this.router.navigate(['/view']);
    });
  }

  clickViewTable(){
    this.router.navigate(['/view']);
  }

}
