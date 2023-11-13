import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza__block"
    speed={2}
    width={280}
    height={400}
    viewBox="0 0 280 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="129" cy="129" r="129" />
    <rect x="-1" y="280" rx="10" ry="10" width="280" height="17" />
    <rect x="-1" y="312" rx="10" ry="10" width="280" height="49" />
    <rect x="161" y="96" rx="0" ry="0" width="1" height="2" />
    <rect x="219" y="370" rx="10" ry="10" width="60" height="30" />
    <rect x="-1" y="370" rx="10" ry="10" width="148" height="30" />
  </ContentLoader>
);

export default Skeleton;
