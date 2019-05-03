import { createPlugin } from '@fullcalendar/core';
import TenDaysGridView from './TenDaysGridView';

export default createPlugin({
  defaultView: 'tenDaysGrid',
  views: {
    dayGrid: TenDaysGridView,
    tenDaysGrid: {
      type: 'dayGrid',
      duration: { days: 10 }
    }
  }
});
