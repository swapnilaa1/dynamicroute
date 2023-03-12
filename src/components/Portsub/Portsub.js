import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
const dataNav = [
  {
    show: "instrument 1",
  },
  {
    show: "Instrument 2",
  },
  {
    show: "Instrument 3",
  },
  {
    show: "Instrument 4",
  },
];

const Portsub = () => {
 const {id1 , id2}= useParams();
 console.log("id2" , id2)
  return (
    <div>
      {id1}{id2}
      <br/>
      { id2===undefined && <div>
        <ul>
          {
            dataNav?.map(data=>(<li><Link to={`/portfolio/${id1}/${data.show}`}>{data.show}</Link></li>))
          }
        </ul>
      </div> }
    <Outlet/>
    </div>
  )
}

export default Portsub