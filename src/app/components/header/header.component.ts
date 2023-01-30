import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { listHeader } from '../template-simple/template-list-header.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  atual?: string;
  listHeader: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getListHeader();
    this.paginaAtual();
  }

  paginaAtual(pagina?: string) {
    if (pagina) sessionStorage.setItem('pagina', JSON.stringify({ pagina }));
    this.atual =
      JSON.parse(sessionStorage.getItem('pagina') as string)?.pagina ||
      '/inicio';
  }
  getListHeader = () => {
    this.listHeader = listHeader;
  };

  header: any = document.getElementById('header');

  showSidebar = false;
  @ViewChild('navigationHeader') navigationHeader!: ElementRef;
  @ViewChild('content') content!: ElementRef;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    this.navigationHeader.nativeElement.style.marginLeft = this.showSidebar
      ? '-1vw'
      : '-100vw';
    this.navigationHeader.nativeElement.style.animationName = this.showSidebar
      ? 'showSidebar'
      : '';
  }

  closeSidebar() {
    if (this.showSidebar) {
      this.showSidebar = true;
      this.toggleSidebar();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (window.innerWidth > 768 && this.showSidebar) {
      this.showSidebar = true;
      this.toggleSidebar();
    }
  }
}
