/**
 * Main Application Entry Point
 * Initializes and coordinates all application modules
 */

import Tasks from './modules/tasks.js';
import Timer from './modules/timer.js';
import Storage from './utils/storage.js';

class StudyPlannerApp {
  constructor() {
    this.init();
  }

  init() {
    // Initialize theme
    this.setupTheme();
    
    // Initialize modules
    this.tasks = new Tasks();
    this.timer = new Timer();
    
    // Request notification permission
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }

  setupTheme() {
    // Load saved theme or default to light
    const settings = Storage.getSettings();
    document.documentElement.setAttribute('data-theme', settings.theme || 'light');
    
    // Set up theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Save preference
        const updatedSettings = Storage.getSettings();
        updatedSettings.theme = newTheme;
        Storage.saveSettings(updatedSettings);
        
        // Update icon
        const icon = themeToggle.querySelector('i');
        if (icon) {
          icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
      });
    }
  }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new StudyPlannerApp();
});