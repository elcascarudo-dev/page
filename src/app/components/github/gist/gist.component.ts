import { Component, OnInit } from '@angular/core';


import { GistService } from '../../../services/gist.service';
@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit {

  listGist: any = [];
  cantidad: Number = 0;
  ver: Boolean = false;

  constructor(
    private _gist: GistService
  ) { }

  ngOnInit(): void {

    this._gist.publicGist().subscribe( resp => {

      this.listGist = resp;

      this.cantidad = this.listGist.length;

      this.ver = true;

    });

  }

}
