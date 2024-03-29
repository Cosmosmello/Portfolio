import CodeBlock from '../components/CodeBlock';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-24 lg:p-48 xl:p-64">
      <div>
        <h1 className="p-4">Mikael Mello</h1>
        <p className="p-4 font-light">This is a working in progress. I am a work in progress.</p>
        <p className="p-4 font-light">You will be able to see here, soon, a little bit of what I have been working on.</p>
      </div>

      <div className="">
        <CodeBlock
          quote="“Dwell on the beauty of life. Watch the stars, and see yourself running with them.”"
          author="― Marcus Aurelius"
        />
      </div>



    </main>
  )

}
