import { react } from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SearchResultsSkelton = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Skeleton width="100%" height={60} />
        </div>
        <div className="col-12">
          <Skeleton width="100%" height={60} />
        </div>
        <div className="col-12">
          <Skeleton width="100%" height={60} />
        </div>
        <div className="col-12">
          <Skeleton width="100%" height={60} />
        </div>
        <div className="col-12">
          <Skeleton width="100%" height={60} />
        </div>
      </div>
    </>
  );
};
export default SearchResultsSkelton;
