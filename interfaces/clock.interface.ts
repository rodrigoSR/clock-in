import { WorldTimeInterface } from '.';

export interface ClockInterface {
  time: Date;
  originalTime: Date;
  dateString: string;
  timeString: string;
  init(worldTime: WorldTimeInterface): void;
}
