import { DayGrid } from '@fullcalendar/daygrid';
import { ComponentContext, findElements, PositionCache } from '@fullcalendar/core';
import { RenderProps, DayGridCell } from '@fullcalendar/daygrid/DayGrid';

export default class TenDaysGrid extends DayGrid {

  constructor(context, e1, renderProps: RenderProps) {
    super(context, e1, renderProps);
  }

}
