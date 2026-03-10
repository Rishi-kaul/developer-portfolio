export default function GithubStats(){

return(

<section className="max-w-6xl mx-auto py-28 px-6 text-center">

<h2 className="text-3xl font-semibold text-green-400 mb-12">
GitHub Analytics
</h2>

<div className="flex justify-center gap-10 flex-wrap">

<div className="github-card">
<p className="github-number">40+</p>
<p className="github-label">Repositories</p>
</div>

<div className="github-card">
<p className="github-number">100+</p>
<p className="github-label">Stars</p>
</div>

<div className="github-card">
<p className="github-number">15+</p>
<p className="github-label">Security Projects</p>
</div>

</div>

</section>

)

}