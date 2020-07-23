import React from "react";
import { useSelector } from "react-redux";
import UserCards from "core/base-components/user-card/UserCards";
import { BRANCH_NAME } from "../store"

function Page({}) {
  const placeholderData = useSelector((state) => {
    return state[BRANCH_NAME].placeholderData;
  });
  const error = useSelector((state) => state.error);
  return (
    <div>
      {placeholderData && (
        <>
          <UserCards data={placeholderData} />
          <pre>
            <code>{JSON.stringify(placeholderData, null, 2)}</code>
          </pre>
        </>
      )}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default Page;
