import React, { useEffect } from "react";
import NivoPie from "./charts/nivo_pie";
import NivoLine from "./charts/nivo_bar";
import UserTable from "./charts/tableCustomer";
import Axios from "axios";

const DashBoard = (props) => {
  useEffect(() => {
    Axios.get("/users/testing")
      .then((response) => {
        props.setDataUsers(response.data);
      })
      .catch((error) => {
        console.error("it has occurred an error", error);
      });
  }, []);

  const data1 = [
    {
      id: "Active",
      label: "Active",
      value: 471,
      color: "hsl(275, 70%, 50%)",
    },
    {
      id: "Inactive",
      label: "Inactive",
      value: 451,
      color: "hsl(307, 70%, 50%)",
    },
    {
      id: "Total",
      label: "Total",
      value: 922,
      color: "hsl(119, 70%, 50%)",
    },
  ];

  const data2 = [
    {
      id: "japan",
      color: "hsl(281, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 50,
        },
        {
          x: "helicopter",
          y: 132,
        },
        {
          x: "boat",
          y: 181,
        },
        {
          x: "train",
          y: 35,
        },
        {
          x: "subway",
          y: 211,
        },
        {
          x: "bus",
          y: 48,
        },
        {
          x: "car",
          y: 40,
        },
        {
          x: "moto",
          y: 159,
        },
        {
          x: "bicycle",
          y: 174,
        },
        {
          x: "horse",
          y: 273,
        },
        {
          x: "skateboard",
          y: 296,
        },
        {
          x: "others",
          y: 140,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(86, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 44,
        },
        {
          x: "helicopter",
          y: 142,
        },
        {
          x: "boat",
          y: 279,
        },
        {
          x: "train",
          y: 229,
        },
        {
          x: "subway",
          y: 87,
        },
        {
          x: "bus",
          y: 185,
        },
        {
          x: "car",
          y: 97,
        },
        {
          x: "moto",
          y: 192,
        },
        {
          x: "bicycle",
          y: 24,
        },
        {
          x: "horse",
          y: 89,
        },
        {
          x: "skateboard",
          y: 5,
        },
        {
          x: "others",
          y: 288,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(109, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 250,
        },
        {
          x: "helicopter",
          y: 239,
        },
        {
          x: "boat",
          y: 9,
        },
        {
          x: "train",
          y: 10,
        },
        {
          x: "subway",
          y: 84,
        },
        {
          x: "bus",
          y: 240,
        },
        {
          x: "car",
          y: 180,
        },
        {
          x: "moto",
          y: 93,
        },
        {
          x: "bicycle",
          y: 153,
        },
        {
          x: "horse",
          y: 173,
        },
        {
          x: "skateboard",
          y: 277,
        },
        {
          x: "others",
          y: 27,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(191, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 140,
        },
        {
          x: "helicopter",
          y: 295,
        },
        {
          x: "boat",
          y: 24,
        },
        {
          x: "train",
          y: 36,
        },
        {
          x: "subway",
          y: 167,
        },
        {
          x: "bus",
          y: 83,
        },
        {
          x: "car",
          y: 202,
        },
        {
          x: "moto",
          y: 232,
        },
        {
          x: "bicycle",
          y: 22,
        },
        {
          x: "horse",
          y: 112,
        },
        {
          x: "skateboard",
          y: 223,
        },
        {
          x: "others",
          y: 18,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(42, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 48,
        },
        {
          x: "helicopter",
          y: 28,
        },
        {
          x: "boat",
          y: 138,
        },
        {
          x: "train",
          y: 41,
        },
        {
          x: "subway",
          y: 82,
        },
        {
          x: "bus",
          y: 243,
        },
        {
          x: "car",
          y: 171,
        },
        {
          x: "moto",
          y: 29,
        },
        {
          x: "bicycle",
          y: 154,
        },
        {
          x: "horse",
          y: 156,
        },
        {
          x: "skateboard",
          y: 292,
        },
        {
          x: "others",
          y: 2,
        },
      ],
    },
  ];

  return (
    <>
      <div className="itemsDashboard">
        <div className="itemDash"></div>
        <div className="itemDash"></div>
        <div className="itemDash"></div>
        <div className="itemDash"></div>
      </div>
      <div className="chartsDashboard">
        <NivoPie data={data1} />
        <NivoLine data={data2} />
      </div>
      <div className="tableDashboard">
        <UserTable dataUsers={props.dataUsers} />
      </div>
    </>
  );
};

export default DashBoard;
