import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from '../header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { socialMediaData } from '../../models/social-media-list';
import { SocialMediaModel } from '../../models/social-media-model';
import { MatDialog } from '@angular/material/dialog';
import { HomePageFormComponent } from '../form-screens/home-page-form/home-page-form.component';
import { LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    HeaderComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    LayoutModule,
  ],
})
export class HomePageComponent implements AfterViewInit, OnInit {
  socialMediaData: SocialMediaModel[] = socialMediaData;
  displayedColumns: string[] = ['id', 'link', 'name', 'description'];
  dataSource = new MatTableDataSource(socialMediaData);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addSocialMedia() {
    this.dialog.open(HomePageFormComponent, {
      data: '',
      disableClose: true,
      autoFocus: true,
    }).afterClosed().subscribe(result => {
      console.log("result: ", result.data);
      this.socialMediaData.push(...result);
      this.dataSource._updateChangeSubscription();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
