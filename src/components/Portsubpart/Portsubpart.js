import React from "react";
import { Outlet, useParams } from "react-router-dom";

const Portsubpart = () => {
  const { id2, id3 } = useParams();
  return (
    <div>
      {id3 === undefined && "part"}
      <Outlet />
    </div>
  );
};

export default Portsubpart;
