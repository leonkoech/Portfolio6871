import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Theme {
  name: string;
  properties: { [key: string]: string };
}

export const themes: Theme[] = [
  {
    name: 'dark',
    properties: {
      '--color-primary': '#fff9eb',
      '--color-secondary': '#12110c',
      '--color-line': '#32302a',
      '--color-selected': '#9ED0E6',
      '--color-hover': '#fff9eb',
      '--color-svg-fill': '#32302a',
      '--color-svg-stroke': '#32302a'
    }
  },
  {
    name: 'light',
    properties: {
      '--color-primary': '#12110c',
      '--color-secondary': '#fff9eb',
      '--color-line': '#d4d0c8',
      '--color-selected': '#2a7a9e',
      '--color-hover': '#12110c',
      '--color-svg-fill': '#d4d0c8',
      '--color-svg-stroke': '#d4d0c8'
    }
  },
  {
    name: 'midnight',
    properties: {
      '--color-primary': '#e0e7ff',
      '--color-secondary': '#0f0f1a',
      '--color-line': '#2d2d4a',
      '--color-selected': '#818cf8',
      '--color-hover': '#e0e7ff',
      '--color-svg-fill': '#2d2d4a',
      '--color-svg-stroke': '#2d2d4a'
    }
  },
  {
    name: 'forest',
    properties: {
      '--color-primary': '#d4e7d4',
      '--color-secondary': '#0a1a0a',
      '--color-line': '#1a3a1a',
      '--color-selected': '#4ade80',
      '--color-hover': '#d4e7d4',
      '--color-svg-fill': '#1a3a1a',
      '--color-svg-stroke': '#1a3a1a'
    }
  },
  {
    name: 'sunset',
    properties: {
      '--color-primary': '#fef3c7',
      '--color-secondary': '#1c0f0a',
      '--color-line': '#4a2c1a',
      '--color-selected': '#fb923c',
      '--color-hover': '#fef3c7',
      '--color-svg-fill': '#4a2c1a',
      '--color-svg-stroke': '#4a2c1a'
    }
  }
];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme = new BehaviorSubject<Theme>(themes[0]);
  activeTheme$ = this.activeTheme.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme);
      if (theme) {
        this.setTheme(theme);
      }
    } else {
      this.setTheme(themes[0]);
    }
  }

  setTheme(theme: Theme): void {
    this.activeTheme.next(theme);
    localStorage.setItem('portfolio-theme', theme.name);

    Object.keys(theme.properties).forEach(property => {
      document.documentElement.style.setProperty(property, theme.properties[property]);
    });
  }

  getThemes(): Theme[] {
    return themes;
  }

  getCurrentTheme(): Theme {
    return this.activeTheme.value;
  }
}
