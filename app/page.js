import SideBar from "@/Components/Sidebar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <>
         <section className="container mx-auto flex justify-center bg-red-200 p-20 min-h-screen">
            <h1 className="text-9xl"> Hero</h1>
         </section>
         <section className="container mx-auto flex justify-center bg-green-600 p-20 min-h-screen">
            <h1 className="text-9xl">Freature</h1>
         </section>
         <section className="container mx-auto flex justify-center bg-yellow-600 p-20 min-h-screen">
            <h1 className="text-9xl">Services</h1>
         </section>
      </>
   );
}
