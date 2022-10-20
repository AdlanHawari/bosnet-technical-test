import React from "react";

export default function NumberOnePage() {
  return (
    <div className="h-screen block w-screen">
      <ul className="flex w-full h-1/4">
        <li className="bg-BOSNET-blue w-3/4 h-full"></li>
        <li className="bg-BOSNET-yellow w-1/4 h-full"></li>
      </ul>
      <ul className="flex w-full h-1/2">
        <li className="bg-BOSNET-red w-1/4 h-full"></li>
        <li className="w-1/2 h-full"></li>
        <li className="bg-BOSNET-yellow w-1/4 h-full"></li>
      </ul>
      <ul className="flex w-full h-1/4">
        <li className="bg-BOSNET-red w-1/4 h-full"></li>
        <li className="bg-BOSNET-green w-3/4 h-full"></li>
      </ul>
    </div>
  );
}
