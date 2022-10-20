import { useRouter } from "next/router";
import React from "react";

export default function HomePage() {
  const page = [
    { title: "1", route: "/1" },
    { title: "2", route: "/2" },
    { title: "3", route: "/3" },
    { title: "4", route: "/4" },
  ];
  const router = useRouter();
  return (
    <div className="py-10 flex justify-center w-full">
      <div className="space-y-10">
        <h1>Answer List:</h1>

        <ul className="space-y-6">
          {page.map((item, index) => (
            <li key={index}>
              <button
                className="bg-slate-600 px-10 rounded-lg py-2 text-white"
                onClick={() => router.push(item.route)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
