import { Component } from '@angular/core';
import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  comboDisable;

  selectedValue ="";
  disableControls = true;
  disableCheckbox = false;

  myChecks = [];

  menuStyle1: any;
  menuStyle2: any;

  constructor() {
    this.loadProducts();
  }

  title = 'dashboard';
  public multiple = false;
  public allowUnsort = true;
  public sort1: SortDescriptor[] = [{
    field: 'UnitPrice',
    dir: 'asc'
  }];
  public sort2: SortDescriptor[] = [{
    field: 'ProductName',
    dir: 'asc'
  }];

  public state: State = {
    skip: 0,
    take: 15,

    filter: {
      logic: 'and',
      filters: []
    }
  };

  public gridView: GridDataResult;

  public sortChange(sort1: SortDescriptor[]): void {
    this.sort1 = sort1;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = {
      data: orderBy(this.gridData, this.sort1),
      total: this.gridData.length
    };
    console.log(this.gridView);
  }

  selectionChange(selected) {
    console.log(this.myChecks);
    if (selected === 'Dont Price') {
      this.gridData.forEach(element => {
        element.image = this.myChecks.includes(element.ProductID) ? '../assets/Kendo.png' : '';
        element.Discontinued = false;
      });
      this.myChecks = [];
      this.disableControls = true;
      setTimeout(() => {
        this.selectedValue = '';
      }, 100);
    }
  }

  onCheckboxChange(event) {
    this.disableControls = event.length > 0 ? false : true;
  }

  public gridData: any[] = [
    {
      "ProductID": 1,
      "ProductName": "Chai",
      "SupplierID": 1,
      "CategoryID": 1,
      "QuantityPerUnit": "10 boxes x 20 bags",
      "UnitPrice": 18.0000,
      "UnitsInStock": 39,
      "UnitsOnOrder": 0,
      "ReorderLevel": 10,
      "Discontinued": false,
      "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
      },
      "sort": "",
    },
    {
      "ProductID": 2,
      "ProductName": "Chang",
      "SupplierID": 1,
      "CategoryID": 1,
      "QuantityPerUnit": "24 - 12 oz bottles",
      "UnitPrice": 19.0000,
      "UnitsInStock": 17,
      "UnitsOnOrder": 40,
      "ReorderLevel": 25,
      "Discontinued": false,
      "Category": {
        "CategoryID": 1,
        "CategoryName": "Beverages",
        "Description": "Soft drinks, coffees, teas, beers, and ales"
      },
      "sort": "",
    },
    {
      "ProductID": 3,
      "ProductName": "Aniseed Syrup",
      "SupplierID": 1,
      "CategoryID": 2,
      "QuantityPerUnit": "12 - 550 ml bottles",
      "UnitPrice": 10.0000,
      "UnitsInStock": 13,
      "UnitsOnOrder": 70,
      "ReorderLevel": 25,
      "Discontinued": false,
      "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      "sort": "",
    },
    {
      "ProductID": 4,
      "ProductName": "Chef Anton's Cajun Seasoning",
      "SupplierID": 2,
      "CategoryID": 2,
      "QuantityPerUnit": "48 - 6 oz jars",
      "UnitPrice": 22.0000,
      "UnitsInStock": 53,
      "UnitsOnOrder": 0,
      "ReorderLevel": 0,
      "Discontinued": false,
      "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      "sort": "",
    },
    {
      "ProductID": 5,
      "ProductName": "Chef Anton's Gumbo Mix",
      "SupplierID": 2,
      "CategoryID": 2,
      "QuantityPerUnit": "36 boxes",
      "UnitPrice": 21.3500,
      "UnitsInStock": 0,
      "UnitsOnOrder": 0,
      "ReorderLevel": 0,
      "Discontinued": true,
      "Category": {
        "CategoryID": 2,
        "CategoryName": "Condiments",
        "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      "sort": "",
    }
  ];

  select(num:number) {
    if ( num === 1){
      this.menuStyle1 = {
        'border-bottom':'2px solid blue'
      };
      this.menuStyle2 = {
        'border-bottom':'0px'
      };
    }else{
      this.menuStyle1 = {
        'border-bottom':'0px'
      };
      this.menuStyle2 = {
        'border-bottom':'2px solid blue'
      };
  
    }
  }

}
