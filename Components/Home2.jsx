import Card1 from "./Card1";
import BottomTag from "./BottomTag";

export default function Home2() {
   return (
      <>
         <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
            <Card1 />
            <BottomTag />
         </section>
      </>
   );
}
