import React from "react";
import data from "../api/data.json";

export default function NumberThreePage() {
  const tableTitle = [
    "Nama Produk",
    "Harga Terendah",
    "Harga Tertinggi",
    "Kategori Produk",
  ];

  //   console.log(data);
  return (
    <div className="p-20">
      <table className="border border-black">
        <thead>
          <tr className="">
            {tableTitle.map((title, index) => (
              <th className="border border-black px-1">{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-black">{item.name}</td>
              <td className="border border-black">{item.low}</td>
              <td className="border border-black">{item.high}</td>
              <td className="border border-black">{item.cat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
