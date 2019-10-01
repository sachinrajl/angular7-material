import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule
} from '@angular/material';


@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatGridListModule,
        MatDividerModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatSelectModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatGridListModule,
        MatDividerModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatSelectModule
    ]
})
export class MaterialModule { }