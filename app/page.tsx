import CodeBlock from '../components/CodeBlock';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-24 lg:p-48 xl:p-64">
      <div>
        <h1 className="p-4">Mikael Mello</h1>
        <p className="p-4 font-light">Crafting interfaces. Building polished software and web experiences. Experimenting with magical details in user interfaces. Webmaster at Linear.</p>
        <p className="p-4 font-light">In the past I’ve developed the Vercel design system, website, and dashboard.</p>
      </div>

      <div className="w-full px-4 md:px-8">
        <CodeBlock
          quote="“Dwell on the beauty of life. Watch the stars, and see yourself running with them.”"
          author="― Marcus Aurelius"
        />
      </div>



    </main>
  )

}
