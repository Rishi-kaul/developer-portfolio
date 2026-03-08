export default function GithubStats(){

  return(

    <section className="max-w-4xl mx-auto py-20 text-center">

      <h2 className="text-3xl text-green-400 mb-10">
        GitHub Analytics
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border border-green-900 p-6 rounded-lg">
          <p className="text-4xl text-green-400">40+</p>
          <p className="text-gray-400">Repositories</p>
        </div>

        <div className="border border-green-900 p-6 rounded-lg">
          <p className="text-4xl text-green-400">100+</p>
          <p className="text-gray-400">Stars</p>
        </div>

        <div className="border border-green-900 p-6 rounded-lg">
          <p className="text-4xl text-green-400">15+</p>
          <p className="text-gray-400">Security Projects</p>
        </div>

      </div>

    </section>

  )

}