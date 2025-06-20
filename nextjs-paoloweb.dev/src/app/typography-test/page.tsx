export default async function TypographyTestPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <h1 className="text-4xl font-bold mb-8 font-silkscreen">Paolo Di Pasquale</h1>
      <h2 className="text-3xl font-bold mb-4 font-quicksand">Test headline 123 with Quicksand</h2>
      <div className="prose">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum sint mollitia voluptatum accusamus rerum non modi necessitatibus nam autem? Dicta reiciendis ut enim odio blanditiis natus repellendus aspernatur dolorum.</p>
      </div>
    </main>
  );
}