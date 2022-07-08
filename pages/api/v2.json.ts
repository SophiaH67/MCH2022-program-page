import type { NextApiRequest, NextApiResponse } from "next";

const url =
  "https://program.mch2022.org/mch2021-2020/schedule/v/DaysToGoSeventeen/widget/v2.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}
