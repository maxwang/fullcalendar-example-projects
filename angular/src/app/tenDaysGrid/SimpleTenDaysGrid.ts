import { SimpleDayGrid, DayGrid } from '@fullcalendar/daygrid';
import { ComponentContext } from '@fullcalendar/core';

export default class SimpleTenDaysGrid extends SimpleDayGrid {

  constructor(context: ComponentContext, dayGrid: DayGrid) {
    console.log('Simple10DaysGrid');
    super(context, dayGrid);
    // this.dayGrid = dayGrid;
  }

}
