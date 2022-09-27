import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Skill } from '../../typing';

const query = groq`
	*[_type == "skill"] {
		...,
		progress
	} | order(progress desc)
`;

type Data = {
  skills: Skill[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const skills: Skill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
};

export default handler;
