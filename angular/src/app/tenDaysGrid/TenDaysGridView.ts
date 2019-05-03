import { View, ViewProps, ComponentContext, ViewSpec, DateProfileGenerator, createElement } from '@fullcalendar/core';
import { DayGridView, buildBasicDayTable } from '@fullcalendar/daygrid';
import Simple10DaysGrid from './Simple10DaysGrid';
import TenDaysGrid from './TenDaysGrid';
// import { buildDayTable } from '@fullcalendar/daygrid/DayGridView';
// import { buildDayTable } from '@fullcalendar/daygrid/DayGridView';

export default class TenDaysGridView extends DayGridView {

  constructor(_context: ComponentContext, viewSpec: ViewSpec, dateProfileGenerator: DateProfileGenerator, parentEl: HTMLElement) {

    super(_context, viewSpec, dateProfileGenerator, parentEl);

    // let dayGridEl = createElement('div', { className: 'fc-day-grid' });
    // let cellWeekNumbersVisible = false;

    // this.dayGrid = new TenDaysGrid(
    //   this.context,
    //   dayGridEl,
    //   {
    //     renderNumberIntroHtml: this.renderDayGridNumberIntroHtml,
    //     renderBgIntroHtml: this.renderDayGridBgIntroHtml,
    //     renderIntroHtml: this.renderDayGridIntroHtml,
    //     colWeekNumbersVisible: this.colWeekNumbersVisible,
    //     cellWeekNumbersVisible
    //   });

    // this.simpleDayGrid = new Simple10DaysGrid(this.context, this.dayGrid);
  }


  // initialize() {
  //   console.log('here');
  // }

  // renderSkeleton() {
  //   // responsible for displaying the skeleton of the view within the already-defined
  //   // this.el, an HTML element
  //   console.log(this.el);
  // }

  // unrenderSkeleton() {
  //   // should undo what renderSkeleton did
  // }

  // renderDates(dateProfile) {
  //   console.log(dateProfile);
  // }

  // unrenderDates() {
  //   // should undo whatever renderDates does
  // }

  // render(props: ViewProps) {
  //   console.log(props);
  //   console.log(this.el);
  //   // super.render(props);

  //   let { dateProfile } = this.props

  //   let dayTable = this.dayTable =
  //     buildBasicDayTable(dateProfile, this.dateProfileGenerator);

  //   if (this.header) {
  //     this.header.receiveProps({
  //       dateProfile,
  //       dates: dayTable.headerDates,
  //       datesRepDistinctDays: dayTable.rowCnt === 1,
  //       renderIntroHtml: this.renderHeadIntroHtml
  //     });
  //   }

  //   this.simpleDayGrid.receiveProps({
  //     dateProfile,
  //     dayTable,
  //     businessHours: props.businessHours,
  //     dateSelection: props.dateSelection,
  //     eventStore: props.eventStore,
  //     eventUiBases: props.eventUiBases,
  //     eventSelection: props.eventSelection,
  //     eventDrag: props.eventDrag,
  //     eventResize: props.eventResize,
  //     isRigid: this.hasRigidRows(),
  //     nextDayThreshold: this.nextDayThreshold
  //   });
  // }

}
