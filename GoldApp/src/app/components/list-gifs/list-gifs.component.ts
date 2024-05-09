import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gifs-service';
import { GiphyData } from '../../models/giphyData ';
import { AlertSwal } from '../../alerts/alerts-class';
@Component({
  selector: 'app-list-gifs',
  templateUrl: './list-gifs.component.html',
  styleUrl: './list-gifs.component.css'
})
export class ListGifsComponent implements OnInit {
  listGifs: GiphyData;
  receivedMessage: any;
  showAlert: AlertSwal;
  currentPage: number = 1;
  constructor(private gifService: GifService) {
    this.receivedMessage = {
      nameGif: 'ALL',
      limitPage: 25
    }
    this.listGifs = new GiphyData();
    this.showAlert = new AlertSwal();
  }
  ngOnInit(): void {
    this.getInitGif();
  }
  receiveMessage(message: Object) {
    this.receivedMessage = message;
    this.getInitGif()
  }
  getInitGif() {
    this.gifService.getListGifs(this.receivedMessage).subscribe({
      next: (rs: GiphyData) => {
        this.listGifs.pagination = rs.pagination;
        this.listGifs.data = rs.data;
        this.currentPage = this.listGifs.data.length <= 6 ? 1 : this.currentPage;
        if (this.listGifs.data.length === 0) {
          return this.showAlert.showAlertSuccess('success', 'No hay datos para mostrar');
        }
      }, error: (err) => {
        this.showAlert.showAlertError('error', 'Oops...', err.error.meta.msg);
      }
    });
  }
}
