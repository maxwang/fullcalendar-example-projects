import { createPlugin } from '@fullcalendar/core';
import TenDaysGridView from './TenDaysGridView';
import { DayGrid } from '@fullcalendar/daygrid/DayGrid';
export { default as TenDaysGrid } from './TenDaysGrid';
export { default as AbstractTenDaysGridView } from './AbstractTenDaysGridView';

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
