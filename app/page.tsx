import PlayArea from "./components/PlayArea"

export default function Home() {
  return (
    <main className="bg-slate-100 min-h-screen p-10 flex justify-center">
      <div className="max-w-screen-lg m-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Tic Tac Toe</h1>
        <PlayArea></PlayArea>
      </div>
    </main>
  );
}
