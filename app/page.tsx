import Profile from "@/src/components/profile";

export default function Home() {
  return (
    <main>
      <h1 className="mt-5 text-center text-2xl font-bold">My Profile</h1>
      <br />
      <h1 className="text-center text-2xl font-normal">Ilmuwan yang luar biasa</h1>
      <div className="flex justify-center gap-6 mt-6">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </main>
  );
}