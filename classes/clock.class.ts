import { parse } from 'date-fns';

import { formatDate } from '../helpers';
import { ClockInterface, WorldTimeInterface } from '../interfaces';

export class Clock implements ClockInterface {
  constructor(
    public time: Date = new Date(),
    public originalTime: Date = new Date(),
    public timeString: string = '',
    public dateString: string = ''
  ) {}

  public init(worldTime: WorldTimeInterface): void {
    this.originalTime = new Date(worldTime.datetime);
    this.time = new Date(worldTime.datetime);
    this.time.setSeconds(0);
    this.time.setMilliseconds(0);
    this.dateString = formatDate(this.time, 'yyyy-MM-dd');
    this.timeString = formatDate(this.originalTime, 'HH:mm:ss');
  }
}
