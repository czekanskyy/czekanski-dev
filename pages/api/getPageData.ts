import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { PageData } from '../../typing';

const query = groq`
	*[_type == "pageData"][0] {
		...,
		"resumeEN": resumes[0].asset->url,
		"resumePL": resumes[1].asset->url
	}
`;

type Data = {
  pageData: PageData;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const pageData: PageData = await sanityClient.fetch(query);
  res.status(200).json({ pageData });
};

export default handler;
