import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  public jsonData;
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig().subscribe(data => this.jsonData = data);
  }
}
