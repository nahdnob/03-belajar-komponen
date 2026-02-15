// ------------------------- Soal 1 -------------------------
// import Profile from "@/src/components/profile";

// export default function Home() {
//   return (
//     <main>
//       <h1 className="mt-5 text-center text-2xl font-bold">My Profile</h1>
//       <br />
//       <h1 className="text-center text-2xl font-normal">
//         Ilmuwan yang luar biasa
//       </h1>
//       <div className="flex justify-center gap-6 mt-6">
//         <profile />
//         <profile />
//         <profile />
//       </div>
//     </main>
//   );
// }

// ------------------------- Soal 2 -------------------------
// import { Gallery } from "@/src/components/gallery";

// export default function Home() {
//   return (
//     <main>
//       <h1 className="mt-5 text-center text-2xl font-bold">My Profile</h1>
//       <br />
//       <h1 className="text-center text-2xl font-normal">Ilmuwan yang luar biasa</h1>
//       <div className="flex justify-center gap-6 mt-6">
//         <Gallery />
//         <Gallery />
//         <Gallery />
//       </div>
//     </main>
//   );
// }

// ------------------------- Soal 3 -------------------------
import Bio from "@/src/components/bio";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center gap-6 mt-6">
        <Bio />
      </div>
    </main>
  );
}