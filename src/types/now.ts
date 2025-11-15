// import type { BlocksContent } from "@strapi/blocks-react-renderer";

import type { StrapiBlocks } from '@sensinum/astro-strapi-blocks';



type NowType = {
  id: number;
  description: typeof StrapiBlocks;
}[];

export type { NowType as default };