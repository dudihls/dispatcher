import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader height={"100%"} width={"100%"}>
    <rect x="0" y="20" rx="0" ry="0" width="100%" height="20" />
    <rect x="0" y="70" rx="0" ry="0" width="100%" height="20" />
    <rect x="0" y="120" rx="0" ry="0" width="100%" height="20" />
    <rect x="0" y="170" rx="0" ry="0" width="100%" height="20" />
    <rect x="0" y="220" rx="0" ry="0" width="100%" height="20" />
  </ContentLoader>
);
