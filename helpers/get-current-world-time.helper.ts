import axios from 'axios';
import { WORLD_TIME_API_URL } from '../constants';
import { WorldTimeInterface } from '../interfaces/world-time.interface';

export async function getCurrentWorldTime(): Promise<WorldTimeInterface> {
  const { data } = await axios.get<WorldTimeInterface>(WORLD_TIME_API_URL);
  return data;
}
