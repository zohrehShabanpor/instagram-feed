/** @format */

import { memo } from "react";
import InlineSVG from "react-inlinesvg";

type SVGProps = {
  path: string;
};

export const SVG = memo(({ path }: SVGProps) => {
  return (
    <InlineSVG cacheRequests uniqueHash={path} uniquifyIDs={true} src={path} />
  );
});
