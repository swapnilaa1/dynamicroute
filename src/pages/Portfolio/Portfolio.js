import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const navI = [
  {
    show: "Home",
    locate: "/",
  },
  {
    show: "Portfolio",
    locate: "/portfolio",
  },
  {
    show: "Holdings",
    locate: "/holdings",
  },
  {
    show: "Others",
    locate: "/others",
  },
  {
    show: "Connect",
    locate: "/connect",
  },
];

const Portfolio = () => {
  const location = useLocation();
    const newArr = location.pathname.split("/");
    newArr.shift();
    let path="";
    const arr2=newArr.map((data)=>{
     path=`${path}/${data}`;
        let obj={
            path:path,
            show:data
        }
        return obj;
    })





  console.log("location", location , newArr);
 
  return (
 
 <div>
      {newArr.length > 1 ? 
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul >
            {
                arr2.map((data , index)=>(<li className={index+1===arr2.length?"is-active":""}><Link to={data.path}>{data.show}</Link></li>))
            }
        </ul>
      </nav>:
      ""
      }

      <Outlet context={["a", "b", "c"]} />
</div>
  );
};

export default Portfolio;
