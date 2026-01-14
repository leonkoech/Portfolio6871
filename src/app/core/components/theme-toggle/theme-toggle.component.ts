import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme, themes } from '../../services/theme.service';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {
  themes: Theme[] = themes;
  currentTheme: Theme;
  isOpen = false;

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  ngOnInit(): void {
    this.themeService.activeTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
    this.isOpen = false;
  }

  closeDropdown(): void {
    this.isOpen = false;
  }
}
