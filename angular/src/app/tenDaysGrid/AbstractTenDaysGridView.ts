import { View, ComponentContext, ViewSpec, DateProfileGenerator, createElement } from '@fullcalendar/core';
import { DayGridView } from '@fullcalendar/daygrid/AbstractDayGridView';
import TenDaysGrid from './TenDaysGrid';
import DayGridDateProfileGenerator from '@fullcalendar/daygrid/DayGridDateProfileGenerator';
import { AbstractDayGridView } from '@fullcalendar/daygrid';

export default abstract class TenDaysGridView extends AbstractDayGridView {

  tenDaysGrid: TenDaysGrid;

  constructor(context: ComponentContext, viewSpec: ViewSpec, dateProfileGenerator: DateProfileGenerator, parentEl: HTMLElement) {
    super(context, viewSpec, dateProfileGenerator, parentEl);


    let dayGridContainerEl = this.scroller.el;
    this.el.querySelector('.fc-body > tr > td').appendChild(dayGridContainerEl)
    dayGridContainerEl.classList.add('fc-day-grid-container')
    let dayGridEl = createElement('div', { className: 'fc-day-grid' })
    dayGridContainerEl.appendChild(dayGridEl)

    let cellWeekNumbersVisible = false;

    this.tenDaysGrid = new TenDaysGrid(
      this.context,
      dayGridEl,
      {
        renderNumberIntroHtml: this.renderDayGridNumberIntroHtml,
        renderBgIntroHtml: this.renderDayGridBgIntroHtml,
        renderIntroHtml: this.renderDayGridIntroHtml,
        colWeekNumbersVisible: this.colWeekNumbersVisible,
        cellWeekNumbersVisible
      }
    );

    Object.assign(this.tenDaysGrid, ...this.dayGrid);
  }
}
