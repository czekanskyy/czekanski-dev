import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Project } from '../../typing';

const query = groq`
	*[_type == "project"] {
		...,
		projID,
		technologies[]->
	} | order(projID asc)
`;

type Data = {
  projects: Project[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const projects: Project[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
};

export default handler;
