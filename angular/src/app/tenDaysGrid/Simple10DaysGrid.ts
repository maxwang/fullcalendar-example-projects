import { SimpleDayGrid, DayGrid } from '@fullcalendar/daygrid';
import { ComponentContext } from '@fullcalendar/core';
import TenDaysGrid from './TenDaysGrid';

export default class Simple10DaysGrid extends SimpleDayGrid {

  constructor(context: ComponentContext, dayGrid: DayGrid) {
    console.log('SImple10DaysGrid');
    super(context, dayGrid);
    this.dayGrid = dayGrid;
  }

}
