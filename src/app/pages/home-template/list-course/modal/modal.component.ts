import { ShareDataService } from './../../../../_core/services/share-data.service';

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  course : any
  constructor(private shareData : ShareDataService) { }

  ngOnInit(): void {
    this.shareData.shareCourse.subscribe((result: any) => {
      this.course= result;
    });

  }


}
