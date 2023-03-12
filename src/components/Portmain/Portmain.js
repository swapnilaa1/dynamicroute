import React from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

const dataNav = [
  {
    show: "Equity",
  },
  {
    show: "Equity Pms",
  },
  {
    show: "infinity",
  },
  {
    show: "cash",
  },
];

const Portmain = () => {
 const context = useOutletContext();
 const { id1 }= useParams()
  return (
    <div className="portmain_out">
      {context} {id1}
      <ul>
        {dataNav.map((data) => (
          <li key={data.show}><Link to={`/portfolio/${data.show}`} >{data.show}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default Portmain;
