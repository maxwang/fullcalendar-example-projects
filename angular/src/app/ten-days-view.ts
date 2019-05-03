import { View, createPlugin, ViewProps } from '@fullcalendar/core';

export class tenDaysView extends View {

  // render(props: ViewProps) {
    // super.render(props);

    // let { dateProfile } = this.props

    // let dayTable = this.dayTable =
    //   this.buildDayTable(dateProfile, this.dateProfileGenerator)

    // if (this.header) {
    //   this.header.receiveProps({
    //     dateProfile,
    //     dates: dayTable.headerDates,
    //     datesRepDistinctDays: dayTable.rowCnt === 1,
    //     renderIntroHtml: this.renderHeadIntroHtml
    //   })
    // }

    // this.simpleDayGrid.receiveProps({
    //   dateProfile,
    //   dayTable,
    //   businessHours: props.businessHours,
    //   dateSelection: props.dateSelection,
    //   eventStore: props.eventStore,
    //   eventUiBases: props.eventUiBases,
    //   eventSelection: props.eventSelection,
    //   eventDrag: props.eventDrag,
    //   eventResize: props.eventResize,
    //   isRigid: this.hasRigidRows(),
    //   nextDayThreshold: this.nextDayThreshold
    // })
  // }

}

export default createPlugin({
  views: {
    custom: tenDaysView
  }
});
