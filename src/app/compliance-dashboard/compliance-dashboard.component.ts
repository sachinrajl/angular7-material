import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-compliance-dashboard',
  templateUrl: './compliance-dashboard.component.html',
  styleUrls: ['./compliance-dashboard.component.scss']
})
export class ComplianceDashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'description', 'release_type'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  release_version: string;
  release_date: string;
  prodduction_version: string;
  prod_release_date: string;
  release_description: string;
  release_type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { release_version: 'lorem ipsum', release_date: 'lorem ipsum', prodduction_version: 'Release_4.2.2', prod_release_date: '2019-30-10', release_description: 'This is dataStax new schema update', release_type: 'Automation' },
  { release_version: 'lorem ipsum', release_date: 'lorem ipsum', prodduction_version: 'Release_4.2.2', prod_release_date: '2019-30-10', release_description: 'This is dataStax new schema update', release_type: 'Automation' },
  { release_version: 'lorem ipsum', release_date: 'lorem ipsum', prodduction_version: 'Release_4.2.2', prod_release_date: '2019-30-10', release_description: 'This is dataStax new schema update', release_type: 'Automation' },
  { release_version: 'lorem ipsum', release_date: 'lorem ipsum', prodduction_version: 'Release_4.2.2', prod_release_date: '2019-30-10', release_description: 'This is dataStax new schema update', release_type: 'Automation' },
  { release_version: 'lorem ipsum', release_date: 'lorem ipsum', prodduction_version: 'Release_4.2.2', prod_release_date: '2019-30-10', release_description: 'This is dataStax new schema update', release_type: 'Automation' },
  { release_version: 'lorem ipsum', release_date: 'lorem ipsum', prodduction_version: 'Release_4.2.2', prod_release_date: '2019-30-10', release_description: 'This is dataStax new schema update', release_type: 'Automation' },
  { release_version: 'lorem ipsum', release_date: 'lorem ipsum', prodduction_version: 'Release_4.2.2', prod_release_date: '2019-30-10', release_description: 'This is dataStax new schema update', release_type: 'Automation' },
];
