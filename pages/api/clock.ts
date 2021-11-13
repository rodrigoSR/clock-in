// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Clock } from '../../classes/clock.class';
import { TimeService } from '../../services/time.service';

type Data = {
  item: Clock;
};
const timeService = new TimeService();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const clock = await timeService.getCurrentTime();
  res.status(200).json({ item: clock });
}
