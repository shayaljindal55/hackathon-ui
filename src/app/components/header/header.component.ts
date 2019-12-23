import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {
  mediaQuery: MediaQueryList;
  fillerNav = [{ id: 0, label: 'Person' }, { id: 1, label: 'Assessment' }, { id: 2, label: 'Outcome Plan' }];
  private _mediaQueryListener: () => void;
  selected = new FormControl(0);
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    public dialog: MatDialog) {
    this.mediaQuery = media.matchMedia('(max-width: 600px)');
    this._mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mediaQuery.addListener(this._mediaQueryListener);
    this.selected.setValue(0);
  }
  ngOnInit() {
  }

  toggle(event) {
    this.selected.setValue(event.id);
  }

  ngOnDestroy(): void {
    this.mediaQuery.removeListener(this._mediaQueryListener);
  }

}