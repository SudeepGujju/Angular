import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
    selector:"app-main",
    templateUrl:"./main.component.html",
    styleUrls:["./main.component.css"]
})
export class MainComponent{

    CurrDate = new Date();
    Mobiles;    
    Laptops;

    ProductList;
    PersonsList;

    constructor(ListService : MainService)
    {
      this.Mobiles = ListService.getMobilesList();
      this.Laptops = ListService.getLaptopsList();
      this.PersonsList = ListService.getPersonsList();
    }

    DispFlagMobiles:boolean = false;
    DispFlagLaptops:boolean = false;

    ShowMobiles()
    {
        this.DispFlagLaptops = false;
        if(!this.DispFlagMobiles)
        {
            this.ProductList = this.Mobiles;
            this.DispFlagMobiles = true;
        }
        else
        {
            this.ProductList = null;
            this.DispFlagMobiles = false;
        }
    }

    ShowLaptops()
    {
        this.DispFlagMobiles = false;
        if(!this.DispFlagLaptops)
        {
            this.ProductList = this.Laptops;
            this.DispFlagLaptops = true;
        }
        else
        {
            this.ProductList = null;
            this.DispFlagLaptops = false;
        }
    }

    Person;

    showPersonDetails(i)
    {
        this.Person = this.PersonsList[i];
    }

    FlagShowVehicles=false;
    VehiclesCode=0;

    showVehicles(vehCode){
       this.VehiclesCode = vehCode;
    }
}

/*
        this.Mobiles = [
            {"Company":"Xiaomi",Model:"A1",Price:"15000"},
            {"Company":"OnePlus",Model:"3T",Price:"35000"},
            {"Company":"Oppo",Model:"Realme",Price:"18000"},
            {"Company":"Vivo",Model:"Y69",Price:"16000"}
        ];
*/
     
  //  SelectedMobile =  {"Company":"Xiaomi",Model:"A1",Price:"15000"};