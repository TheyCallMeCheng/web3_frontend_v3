// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getScrapingData(
  req:NextApiRequest,
  res:NextApiResponse
  ) {
    const base_url:string = 
    `https://api.apify.com/v2/acts/breathtaking_apple~finaltest/runs/last/dataset/items?token=${process.env.APIFY_KEY}`;

    const response = await fetch (base_url);
    const data = await response.json();

    res.status(200).json({data});
}
