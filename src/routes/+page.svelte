<script>
	// import Newsletter from '../components/Newsletter.svelte';  I dont have this component yet!
	import FeatureCard from '../components/FeatureCard.svelte';
	import LatestPosts from '../components/LatestPosts.svelte';
	import {
		SITE_URL,
		REPO_URL,
		SITE_TITLE,
		SITE_DESCRIPTION,
		DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE
	} from '$lib/siteConfig';


	/** @type {import('./$types').PageData} */
	export let data;
	// technically this is a slighlty different type because doesnt have 'content' but we'll let it slide
	/** @type {import('$lib/types').ContentItem[]} */
	$: items = data.items;
</script>

<svelte:head>
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<link rel="alternate" type="application/rss+xml" href={SITE_URL + '/rss.xml'} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={DEFAULT_OG_IMAGE} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
</svelte:head>

<div
	class="flex flex-col items-start justify-center max-w-2xl px-4 pb-16 mx-auto border-gray-200 dark:border-gray-700 sm:px-8"
>
	<div class="flex flex-col-reverse items-start sm:flex-row">
		<div class="flex flex-col pr-8">
			<h1 class="mb-3 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
				Hello, it's me -

				<span
					class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-900"
				>
					<span class="relative text-yellow-300 skew-y-2">{SITE_TITLE}</span>
				</span>
				!
			</h1>
			<h2 class="mb-4 text-gray-700 dark:text-gray-200">
				A blog-portfolio about <span class="font-semibold"
				>Education, Programming</span>, and well about
				<span class="font-semibold"
				> everything else</span> in my life.
				<!-- I swear myself that I would be honest and transparent about everything I write here.
				So, if you are looking for a blog that is not afraid to speak the truth, you are in the right place.
				Do not try to be judgemental, it is just my perspective. -->
			</h2>
			<!-- <p class="mb-16 text-gray-600 dark:text-gray-400">
				<a href={REPO_URL}>View source and feature list here!</a>
			</p> -->
		</div>
		<!-- <div
				class="w-[80px] h-[80px] rounded-full sm:w-[176px] sm:h-[136px] relative mb-8 sm:mb-0 mr-auto bg-cyan-300 bg-opacity-25"
			/> -->
	</div>

	<section class="w-full mb-16">
		<h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
			Featured Posts
		</h3>
		<div class="flex flex-col gap-6 md:flex-row">
			<FeatureCard 
				title="Welcome to swyxkit 2022!" 
				href="/welcome" 
				stringData="Jan 2022" />
			<FeatureCard 
				title="Welcome to swyxkit 2022!" 
				href="/welcome" 
				stringData="Jan 2022" />
			<FeatureCard 
				title="Welcome to swyxkit 2022!" 
				href="/welcome" 
				stringData="Jan 2022" />
		</div>
	</section>

	<LatestPosts {items} />

	<!-- <Newsletter /> -->
</div>
