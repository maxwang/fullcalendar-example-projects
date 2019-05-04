import { RenderProps, DayGridProps } from '@fullcalendar/daygrid/DayGrid';
import { DateComponent } from '@fullcalendar/core';
import { DayGrid } from '@fullcalendar/daygrid';

export default class TenDaysGrid extends DayGrid {
  constructor(context, el, renderProps: RenderProps) {
    super(context, el, renderProps);
    console.log('TenDaysGrid');
  }

  render(props: DayGridProps) {
    console.log('TenDaysGrid render');
    super.render(props);
  }

}
