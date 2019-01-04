import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  @Input() defaulttext: string;
  @Input() popovertext: string;
  @Input() position: string;

  @ViewChild('popover') el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var style = document.createElement("style");
    style.type = "text/css";

    let styling =
    `        
    .popover {
      position: relative;
      margin: 100px auto;
      display: block;
      width: 125px;
      height: 100px;
      transition: opacity 0.3s;
    }
    
    .popover .popover-text-top {
      width: 125px;
      background-color: #555;
      color: #fff;
      text-align: center;
      border-radius: 5px;
      padding: 5px;
      position: absolute;
      z-index: 1;
      bottom: 100%;
      left: 45%;
      margin-left: -60px;
      display: none;
      transition: opacity 0.3s;
    }
    
    .popover .popover-text-top::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-top: 0px;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
      transform: rotate(0deg);
    }
    
    .popover .popover-text-bottom {
      width: 125px;
      background-color: #555;
      color: #fff;
      text-align: center;
      border-radius: 5px;
      padding: 5px;
      position: absolute;
      z-index: 1;
      top: 170%;
      left: 45%;
      margin-left: -60px;
      display: none;
      transition: opacity 0.3s;
    }
    
    .popover .popover-text-bottom::after {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-top: 0px;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
      transform: rotate(180deg);
    }
    
    .popover .popover-text-left {
      width: 125px;
      background-color: #555;
      color: #fff;
      text-align: center;
      border-radius: 5px;
      padding: 5px;
      position: absolute;
      z-index: 1;
      top: 0%;
      left: -70%;
      margin-left: -60px;
      display: none;
      transition: opacity 0.3s;
    }
    
    .popover .popover-text-left::after {
      content: "";
      position: absolute;
      top: 50%;
      right: -3.5%;
      margin-top: -5px;
      margin-right: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
      transform: rotate(-90deg);
    }
    
    .popover .popover-text-right {
      width: 125px;
      background-color: #555;
      color: #fff;
      text-align: center;
      border-radius: 5px;
      padding: 5px;
      position: absolute;
      z-index: 1;
      top: 0%;
      right: -110%;
      margin-left: -60px;
      display: none;
      transition: opacity 0.3s;
    }
    
    .popover .popover-text-right::after {
      content: "";
      position: absolute;
      top: 50%;
      left: -7.5%;
      margin-top: -5px;
      margin-right: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
      transform: rotate(90deg);
    }
    
    .popover:hover .popover-text-right {
      visibility: visible;
      display: block;
    }
    
    .popover:hover .popover-text-top {
      visibility: visible;
      display: block;
    }
    
    .popover:hover .popover-text-left {
      visibility: visible;
      display: block;
    }
    
    .popover:hover .popover-text-bottom {
      visibility: visible;
      display: block;
    }
    `

    style.innerHTML = styling;
    document.getElementsByTagName("head")[0].appendChild(style);

  }

}
