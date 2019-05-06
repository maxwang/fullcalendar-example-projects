import { RenderProps, DayGridProps } from '@fullcalendar/daygrid/DayGrid';
import { DateComponent } from '@fullcalendar/core';
import { DayGrid } from '@fullcalendar/daygrid';
import TenDaysGridEventRenderer from './TenDayGridEventRenderer';
// import DayGridEventRenderer from '@fullcalendar/daygrid/DayGridEventRenderer';

export default class TenDaysGrid extends DayGrid {
  constructor(context, el, renderProps: RenderProps) {
    super(context, el, renderProps);
    // this.eventRenderer = new TenDaysGridEventRenderer(this);
    // let eventRenderer = new TenDaysGridEventRenderer(this);
    // console.log(this.eventRenderer.isDaySegCollision(null, null))
    console.log(window);
    console.log('TenDaysGrid');
this.eventRenderer.isd
  }

  render(props: DayGridProps) {
    // this.eventRenderer = fun
    super.render(props);
  }

}
