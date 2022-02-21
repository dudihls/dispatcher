import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader width={"100%"} height={"100%"}>
    <rect x="5%" y="214" rx="0" ry="0" width="15%" height="40" />
    <rect x="20%" y="214" rx="0" ry="0" width="15%" height="40" />
    <rect x="35%" y="199" rx="0" ry="0" width="15%" height="55" />
    <rect x="50%" y="181" rx="0" ry="0" width="15%" height="74" />
    <rect x="65%" y="135" rx="0" ry="0" width="15%" height="120" />
    <rect x="80%" y="197" rx="0" ry="0" width="15%" height="58" />
    <rect x="95%" y="227" rx="0" ry="0" width="15%" height="28" />
    <rect x="10%" y="260" rx="0" ry="0" width="40" height="10" />
    <rect x="35%" y="260" rx="0" ry="0" width="40" height="10" />
    <rect x="60%" y="260" rx="0" ry="0" width="40" height="10" />
    <rect x="85%" y="260" rx="0" ry="0" width="40" height="10" />
  </ContentLoader>
);
