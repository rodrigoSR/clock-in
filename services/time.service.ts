import { Clock } from '../classes/clock.class';
import { getCurrentWorldTime } from '../helpers';

export class TimeService {
  constructor() {}

  public async getCurrentTime(): Promise<Clock> {
    const worldTime = await getCurrentWorldTime();
    const clock = new Clock();
    clock.init(worldTime);
    return clock;
  }
}
