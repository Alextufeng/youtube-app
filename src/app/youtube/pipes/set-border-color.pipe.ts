import { Pipe, PipeTransform } from '@angular/core';
import { BORDER_COLORS, TIME } from '../models/constants';

@Pipe({
  name: 'setColorDate',
  standalone: true,
})
export class SetColorDatePipe implements PipeTransform {
  private borderColor = '';
  private days = 0;

  transform(publishedAt: string): string {
    if (publishedAt) {
      this.getPublishedDaysBefore(publishedAt);
      this.getBorderColor(this.days);
    }
    return this.borderColor;
  }

  private getPublishedDaysBefore(publishedAt: string) {
    const milliseconds = Date.now() - new Date(publishedAt).getTime();
    const millisecondsIsDays =
      milliseconds /
      (TIME.millisecondsPerSecond * TIME.secondsPerMinute * TIME.minutesPerHour * TIME.hoursPerDay);
    this.days = millisecondsIsDays;
  }

  private getBorderColor(days: number): void {
    switch (true) {
      case days > TIME.halfOfYear:
        this.borderColor = BORDER_COLORS.red;
        break;
      case days < TIME.week:
        this.borderColor = BORDER_COLORS.blue;
        break;
      case days < TIME.month:
        this.borderColor = BORDER_COLORS.green;
        break;
      default:
        this.borderColor = BORDER_COLORS.yellow;
    }
  }
}
