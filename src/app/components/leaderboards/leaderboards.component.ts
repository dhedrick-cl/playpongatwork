import { Component, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { LeaderboardService } from '../../services/leaderboard.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent{
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  public gridOptions: GridOptions;
  rowData: Profile[] = [];
  private gridApi;
  private gridColumnApi;

  constructor(private http: HttpClient, public leaderBoardService: LeaderboardService) {
    const gridSize = 4;
    this.gridOptions = {
      rowHeight: gridSize * 6,
      headerHeight: gridSize * 7,
      floatingFiltersHeight: gridSize * 7,
      columnDefs: [
        { headerName: 'Name', field: 'name', sortable: true, filter: true, resizable: true },
        { headerName: 'Nickname', field: 'nickname', sortable: true, filter: true, resizable: true },
        { headerName: 'Points', field: 'points', sortable: true, filter: true, resizable: true },
        { headerName: 'Total Games Played', field: 'gamesplayed', sortable: true, filter: true, resizable: true },
        { headerName: 'Games Won', field: 'gameswon', sortable: true, filter: true, resizable: true },
        { headerName: 'Games Lost', field: 'gameslost', sortable: true, filter: true, resizable: true }
      ]
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.leaderBoardService.profiles.subscribe(results => {
      this.rowData = results;
    });
    params.api.sizeColumnsToFit();
    //this.filterTime();

  }
}
