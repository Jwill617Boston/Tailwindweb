import Link from "next/link";

export default function NavBar() {
   return (
      <nav className="sticky w-full bg-red-800 h-16">
         <ul className="flex justify-center justify-evenly space-x-4 py-5">
            <li className="">
               <Link href="/">Home</Link>
            </li>
            <li>
               <Link href="/About">About</Link>
            </li>
            <li>
               <Link href="/Services">Services</Link>
            </li>
         </ul>
      </nav>
   );
}
