/**
 * Storage Utility Module
 * Handles all data persistence operations
 */
class Storage {
  static saveSettings(settings) {
    localStorage.setItem('studyPlannerSettings', JSON.stringify(settings));
  }

  static getSettings() {
    return JSON.parse(localStorage.getItem('studyPlannerSettings')) || {
      theme: 'light',
      pomodoroDuration: 25,
      shortBreakDuration: 5,
      longBreakDuration: 15
    };
  }

  static saveTasks(tasks) {
    localStorage.setItem('studyPlannerTasks', JSON.stringify(tasks));
  }

  static getTasks() {
    return JSON.parse(localStorage.getItem('studyPlannerTasks')) || [];
  }
}

export default Storage;