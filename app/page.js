"use client";

import { useState } from "react";

import SideBar from "@/Components/Sidebar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
   const [loading, setLoading] = useState(false);
   return (
      <>
         <section className="container mx-auto  bg-red-200 p-20 min-h-screen">
            <div class=" flex text-9xl font-extrabold justify-center mb-20">
               <span class="hero-text-styled">Hero</span>
            </div>

            <div class="grid grid-cols-4 gap-4">
               <div
                  className={`bg-purple-600 text-center shadow-2xl p-10 ${
                     loading ? "blur-sm" : ""
                  }`}
               >
                  01
               </div>
               <div className=" bg-purple-600 text-center p-10 shadow-2xl">
                  02
               </div>
               <div className=" bg-purple-600 text-center p-10 shadow-2xl">
                  03
               </div>
               <div className=" bg-purple-600 text-center p-10 shadow-2xl">
                  04
               </div>
            </div>
         </section>
         <section className="container mx-auto flex justify-center bg-green-600 p-20 min-h-screen">
            <h1 className="text-4xl text-gray-50 basis-1/4 text-center">
               Freature 1
            </h1>
            <h1 className="text-4xl text-gray-50 basis-1/4 text-center">
               Freature 2
            </h1>
            <h1 className="text-4xl text-gray-50 basis-1/4 text-center">
               Freature 3
            </h1>
            <h1 className="text-4xl text-gray-50 basis-1/4 text-center">
               Freature 4
            </h1>
         </section>
         <section className="container mx-auto columns-3 bg-yellow-600 p-20 min-h-screen">
            <h1 className="text-4xl bg-white text-center">Services 1</h1>
            <h1 className="text-4xl bg-slate-400 text-center">Services 2</h1>
            <h1 className="text-4xl bg-yellow-100 text-center">Services 3</h1>
         </section>
      </>
   );
}
