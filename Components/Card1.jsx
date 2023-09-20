import Link from "next/link";
import photo1 from "../public/photo1.jpg";
import Image from "next/image";
export default function Card1() {
   return (
      <div className="h-full">
         <div className="max-w-xs mx-auto">
            <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
               <Link
                  className="block focus:outline-none focus-visible:ring-2"
                  href="#0"
               >
                  <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                     <Image
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src={photo1}
                        width="320"
                        height="180"
                        alt="Course"
                     />
                  </figure>
               </Link>

               <div className="flex-grow flex flex-col p-5">
                  <div className="flex-grow">
                     <header className="mb-3">
                        <Link
                           className="block focus:outline-none focus-visible:ring-2"
                           href="#0"
                        >
                           <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">
                              Fitness Photo
                           </h3>
                        </Link>
                     </header>

                     <div className="mb-8">
                        <p>
                           The JavaScript course for everyone! Master JavaScript
                           with projects, challenges and theory.
                        </p>
                     </div>
                  </div>

                  <div className="flex justify-end space-x-2">
                     <Link
                        className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2"
                        href="#0"
                     >
                        Cancel
                     </Link>
                     <Link
                        className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500"
                        href="#0"
                     >
                        Preview
                     </Link>
                     <Link
                        className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white"
                        href="#0"
                     >
                        Buy Now
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
