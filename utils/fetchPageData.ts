import type { PageData } from '../typing';

export const fetchPageData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageData`);

  const data = await res.json();
  const pageData: PageData = data.pageData;

  return pageData;
};
