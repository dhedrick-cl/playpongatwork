import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  public gridOptions: GridOptions;
  rowData: Photo[] = [];
  private gridApi;
  private gridColumnApi;
  photos: Observable<any>;
  ngOnInit() {
    this.photosService.getPhotos();
  }
  constructor(private http: HttpClient, public photosService: PhotosService) {
    const gridSize = 4;
    this.gridOptions = {
      rowHeight: gridSize * 6,
      headerHeight: gridSize * 7,
      floatingFiltersHeight: gridSize * 7,
      columnDefs: [
        { headerName: 'Name', field: 'albumId', sortable: true, filter: true, resizable: true },
        { headerName: 'Points', field: 'id', sortable: true, filter: true, resizable: true },
        { headerName: 'Total Games Played', field: 'title', sortable: true, filter: true, resizable: true },
        { headerName: 'Games Won', field: 'url', sortable: true, filter: true, resizable: true },
        { headerName: 'Games Lost', field: 'thumbnailUrl', sortable: true, filter: true, resizable: true }
      ]
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.photosService.photos.subscribe(results => {
      this.rowData = results;
    });
    params.api.sizeColumnsToFit();
    //this.filterTime();

  }
}
