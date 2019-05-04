import { SimpleDayGrid, DayGrid } from '@fullcalendar/daygrid';
import { ComponentContext } from '@fullcalendar/core';
import TenDaysGrid from './TenDaysGrid';

export default class SimpleTenDaysGrid extends SimpleDayGrid {

  constructor(context: ComponentContext, dayGrid: TenDaysGrid) {
    console.log('Simple10DaysGrid');
    super(context, dayGrid);
    // this.dayGrid = dayGrid;
  }

}
