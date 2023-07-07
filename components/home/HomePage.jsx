import React from "react";

import withAuth from "@/pages/api/withAuth";

const HomePage = () => {
  return <div>HomePage</div>;
};

export default withAuth(HomePage);
