import React from "react";
import { useSelector } from "react-redux";
import { BRANCH_NAME } from "../store";
import Photos from "./Photos";

function Page() {
  const photos = useSelector((state) => {
    console.log(state);
    return state[BRANCH_NAME].photos;
  });
  const error = useSelector((state) => state.error);
  return (
    <div>
      {photos && (
        <>
          <Photos data={photos}/>
          <pre>
            <code>{JSON.stringify(photos, null, 2)}</code>
          </pre>
        </>
      )}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default Page;
