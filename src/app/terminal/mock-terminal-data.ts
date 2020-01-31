import { TerminalLine } from './terminal-line';

export const DATA: TerminalLine[] = [
  { id: 1, text: 'Herzlichen Glückwunsch zu Ihrem neuen Kampfjet!', type: 'info', pause: 1 , active: false},
  { id: 2, text: '-----------', type: 'info', pause: 1 , active: false},
  { id: 3, text: 'Booting system...', type: 'info', pause: 1.6, active: false},
  { id: 4, text: 'Running system checks...', type: 'info', pause: 0.3 , active: false},
  { id: 5, text: 'Initialising antigravity modules...', type: 'info', pause: 0.1 , active: true},
  { id: 6, text: 'Unable to complete startup: Exit code -1 ', type: 'alert', pause: 0.1 , active: false},
  { id: 7, text: 'Trying to restart...', type: 'info', pause: 3 , active: false},
  { id: 8, text: 'Error 07: Memory control block destroyed.', type: 'alert', pause: 1 , active: false},
  { id: 9, text: 'Error 24: Bad request structure length.', type: 'alert', pause: 0.3, active: true },
  { id: 10, text: 'Error 66: Network device type incorrect.', type: 'alert', pause: 0.5, active: false},
  { id: 11, text: 'Segmentation fault (core dumped)', type: 'info', pause: 0.3, active: true},
  { id: 12, text: 'Retrying system checks...', type: 'info', pause: 2, active: true },
  { id: 13, text: 'Warning: 837 Bugs found.', type: 'alert', pause: 2, active: false },
  { id: 14, text: 'You spent 6\'000\'000\'000 CHF on this?', type: 'info', pause: 2, active: false },
  { id: 15, text: 'Referendum found - Sign now to prevent further damage!', type: 'info', pause: 2, active: false },
  { id: 15, text: 'Loading referendum, please wait...', type: 'info', pause: 2, active: false }
]
