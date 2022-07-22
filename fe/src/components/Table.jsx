import { useEffect, useState } from "react";

export function Table() {
  useEffect(() => {}, []);
  const [data, setData] = useState([
    {
      song: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      artist: "Malcolm Lockyer",
      year: "1961",
    },
    {
      song: "Witchy Woman",
      artist: "The Eagles",
      year: "1972",
    },
    {
      song: "Shining Star",
      artist: "Earth, Wind, and Fire",
      year: "1961",
    },
  ]);
  return (
    <div className="bg-white p-2">
      <h1 className="text-6xl "> Table</h1>
      <table className="table-fixed w-full">
        <thead>
          <tr className="border-black border-2">
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr className="border-black border-2" key={key}>
                <td className="">{val.song}</td>
                <td className="">{val.artist}</td>
                <td className="">{val.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
