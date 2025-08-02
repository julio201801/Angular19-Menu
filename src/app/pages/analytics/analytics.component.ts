import { Component,  input, OnInit, signal, viewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon'
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-analytics',
  imports: [MatTableModule,MatIconModule,MatPaginatorModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent<T> implements OnInit{
  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();
  sortableColumns = input<string[]>([]);

  dataSource = new MatTableDataSource<T>();
  valueToFilter = signal('');
  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);
  //private readonly _contactSvc = inject(ContactService);
  //private readonly _modalSvc = inject(ModalService);
  //private readonly _snackBar = inject(SnackBarService);
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;
  constructor() {
   
   }
   ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort(); 
    this.dataSource.paginator = this._paginator();
  }
  openEditForm(data: T): void {
   // this._modalSvc.openModal<ModalComponent, T>(ModalComponent, data, true);
  }
 
  selectedRow(data: T): void {
    this.openEditForm(data);
  }
  


  deleteContact(id: string): void {
    //const confirmation = confirm(APP_CONSTANTS.MESSAGES.CONFIRMATION_PROMPT);
    
    //if (confirmation) {
      //this._contactSvc.deleteContact(id);
      //this._snackBar.showSnackBar(APP_CONSTANTS.MESSAGES.CONTACT_DELETED);
    //}
  }
}
