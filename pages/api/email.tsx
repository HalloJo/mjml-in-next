// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { mjmlHtml } from './emailTemplate';

export const Email = (req: NextApiRequest, res: NextApiResponse<any>) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write(mjmlHtml);
  res.end();
  // res.status(200).json({
  //   iets: true,
  //   mjml: mjmlHtml,
  // });
};

export default Email;
