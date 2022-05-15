import React from "react";

function Detail({ detailLoading, userDetail }) {
  return (
    <div>
      <h2>Detail</h2>
      {detailLoading && <div>Loading...</div>}
      {!detailLoading && <pre>{JSON.stringify(userDetail, null, 2)}</pre>}
    </div>
  );
}

export default Detail;
