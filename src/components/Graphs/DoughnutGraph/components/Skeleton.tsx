import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader height={"100%"} width={"100%"}>
    <circle cx="50%" cy="80" r="60" />
    <rect x="0" y="180" rx="0" ry="0" width="100%" height="15" />
    <rect x="0" y="205" rx="0" ry="0" width="100%" height="15" />
    <rect x="0" y="230" rx="0" ry="0" width="100%" height="15" />
    <rect x="0" y="255" rx="0" ry="0" width="100%" height="15" />
  </ContentLoader>
);
