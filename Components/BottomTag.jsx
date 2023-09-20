import Link from "next/link";

export default function BottomTag() {
   return (
      <div
         x-show="open"
         className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60"
         x-data="{ open: true }"
      >
         <div className="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div>
               👉{" "}
               <Link
                  className="hover:underline ml-1"
                  href="https://cruip.com/?ref=codepen-cruip-snippet-10"
                  target="_blank"
               >
                  More components on Cruip.com
               </Link>
            </div>
            <button className="text-gray-500 hover:text-gray-400 ml-5">
               <span className="sr-only">Close</span>
               <svg
                  className="w-4 h-4 flex-shrink-0 fill-current"
                  viewBox="0 0 16 16"
               >
                  <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
               </svg>
            </button>
         </div>
      </div>
   );
}
