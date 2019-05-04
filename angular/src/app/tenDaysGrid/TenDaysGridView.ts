import { View, ViewProps, ComponentContext, ViewSpec, DateProfileGenerator, createElement, DayHeader, DayTable, memoize, DaySeries, DateProfile } from '@fullcalendar/core';
import { DayGridView, buildBasicDayTable, SimpleDayGrid } from '@fullcalendar/daygrid';
import AbstractTenDaysGridView from './AbstractTenDaysGridView';
import SimpleTenDaysGrid from './SimpleTenDaysGrid';

// import { buildDayTable } from '@fullcalendar/daygrid/DayGridView';
// import { buildDayTable } from '@fullcalendar/daygrid/DayGridView';

export default class TenDaysGridView extends AbstractTenDaysGridView {
  header: DayHeader;
  simpleDayGrid: SimpleTenDaysGrid;
  dayTable: DayTable;

  private buildDayTable = memoize(buildDayTable);

  constructor(_context: ComponentContext, viewSpec: ViewSpec, dateProfileGenerator: DateProfileGenerator, parentEl: HTMLElement) {
    super(_context, viewSpec, dateProfileGenerator, parentEl);

    console.log(_context);
    console.log(viewSpec);
    console.log(dateProfileGenerator);

    if (this.opt('columnHeader')) {
      this.header = new DayHeader(
        this.context,
        this.el.querySelector('.fc-head-container')
      );
    }

    this.simpleDayGrid = new SimpleTenDaysGrid(this.context, this.tenDaysGrid);
  }

  destroy() {
    super.destroy();

    if (this.header) {
      this.header.destroy();
    }

    this.simpleDayGrid.destroy();
  }

  render(props: ViewProps) {
    super.render(props);

    let { dateProfile } = this.props;

    let dayTable = this.dayTable =
      this.buildDayTable(dateProfile, this.dateProfileGenerator);

    console.log(dayTable);
    // dayTable.cells = [];
    if (this.header) {
      this.header.receiveProps({
        dateProfile,
        dates: dayTable.headerDates,
        datesRepDistinctDays: dayTable.rowCnt === 1,
        renderIntroHtml: this.renderHeadIntroHtml
      });
    }

    this.simpleDayGrid.receiveProps({
      dateProfile,
      dayTable,
      businessHours: props.businessHours,
      dateSelection: props.dateSelection,
      eventStore: props.eventStore,
      eventUiBases: props.eventUiBases,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      isRigid: this.hasRigidRows(),
      nextDayThreshold: this.nextDayThreshold
    });
  }
}


export function buildDayTable(dateProfile: DateProfile, dateProfileGenerator: DateProfileGenerator) {
  let daySeries = new DaySeries(dateProfile.renderRange, dateProfileGenerator)

  return new DayTable(
    daySeries,
    /year|month|week/.test(dateProfile.currentRangeUnit)
  )
}
