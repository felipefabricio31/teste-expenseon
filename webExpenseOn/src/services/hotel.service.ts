import { Injectable } from '@angular/core';
//
import { GlobalUrl } from './globalUrl.service';
import axios from 'axios';

@Injectable({ providedIn: 'root' })
export class HotelServices {
  //
  constructor(public globalUrl: GlobalUrl) {}
  //
  getAll() {
    return axios.get(`${this.globalUrl.baseAPIUrl}/hoteis`, {});
  }
  //
  postHotel(postData) {
    return axios.post(
      `${this.globalUrl.baseAPIUrl}/hoteis`,
      postData,
      {}
    );
  }
  //
  updateHotel(postData) {
    return axios.put(`${this.globalUrl.baseAPIUrl}/hoteis`, postData, {});
  }

  deleteHotel(id) {
    return axios.delete(
      `${this.globalUrl.baseAPIUrl}/hoteis/delete/${id}`,
      {}
    );
  }
}
