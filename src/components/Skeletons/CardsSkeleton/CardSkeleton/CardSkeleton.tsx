import ContentLoader from "react-content-loader";

export const CardSkeleton = () => (
  <ContentLoader height={242} width="100%">
    <rect x="0" y="0" width="235" height="230" />
    <rect x="240" y="17" width="20%" height="10" />
    <rect x="240" y="32" width="50%" height="8" />
    <rect x="240" y="50" width="100%" height="120" />
    <rect x="90%" y="200" width="300" height="20" />
  </ContentLoader>
);

export const CardSkeletonMobile = () => (
  <ContentLoader height="400" width="343">
    <rect x="0" y="0" width="100%" height="149" />
    <rect x="10" y="155" width="20%" height="5" />
    <rect x="10" y="165" width="100%" height="40" />
    <rect x="10" y="210" width="20%" height="5" />
    <rect x="10" y="225" width="100%" height="80" />
    <rect x="17%" y="315" width="70%" height="20" />
  </ContentLoader>
);
