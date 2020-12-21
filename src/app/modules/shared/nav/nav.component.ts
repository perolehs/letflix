import { HttpUrlEncodingCodec } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  form = new FormGroup({
    query: new FormControl('')
  });
  
  constructor(
    private router: Router,
    private urlEncode: HttpUrlEncodingCodec
  ) { }

  ngOnInit(): void {
  }

  /**
   * Para el buscador
   */
  public find(){
    let query = this.form.get('query')?.value;
    if (query && query !== '')
      this.router.navigateByUrl(`/search/${this.urlEncode.encodeValue(query)}`)
  }
}
