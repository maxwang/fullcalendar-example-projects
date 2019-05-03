import { View, ViewProps } from '@fullcalendar/core';
import { DayGridView, buildBasicDayTable } from '@fullcalendar/daygrid';
// import { buildDayTable } from '@fullcalendar/daygrid/DayGridView';
// import { buildDayTable } from '@fullcalendar/daygrid/DayGridView';

export default class TenDaysGridView extends DayGridView {

  initialize() {
    console.log('here');
  }

  renderSkeleton() {
    // responsible for displaying the skeleton of the view within the already-defined
    // this.el, an HTML element
    console.log(this.el);
  }

  unrenderSkeleton() {
    // should undo what renderSkeleton did
  }

  renderDates(dateProfile) {
    console.log(dateProfile);
  }

  unrenderDates() {
    // should undo whatever renderDates does
  }

  render(props: ViewProps) {
    console.log(props);
    console.log(this.el);
    // super.render(props);

    let { dateProfile } = this.props

    let dayTable = this.dayTable =
      buildBasicDayTable(dateProfile, this.dateProfileGenerator);

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
