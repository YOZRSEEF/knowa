<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<section class="w-full py-6 md:py-12 lg:py-24 xl:py-32">
	<div class="container px-4 md:px-6">
		<div class="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
			<div class="space-y- flex flex-col justify-center space-y-4">
				<div class="space-y-2">
					<h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
						Knowa - Your AI-Powered Knowledge Base
					</h1>
					<p class="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
						Effortlessly manage and access your team's collective knowledge with Knowa's intuitive
						interface and powerful AI assistant.
					</p>
				</div>
				<div class="flex flex-col gap-2 min-[400px]:flex-row">
					<Button href="/" class="">Get Started</Button>
					<Button href="/" variant="outline" class="">Learn More</Button>
				</div>
			</div>
			<img
				alt="Hero"
				class="mx-auto aspect-square overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last"
				height="550"
				src="/landing1.jpeg"
				width="550"
			/>
		</div>
	</div>
</section>

<section class="w-full bg-[#e1dddd] py-12 dark:bg-[#191918] md:py-24 lg:py-32">
	<div class="container px-4 md:px-6">
		<div
			class="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]"
		>
			<div class="flex flex-col justify-center space-y-4">
				<div class="space-y-2">
					<div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
						AI Assistant
					</div>
					<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
						Effortlessly Manage Your Knowledge Base
					</h2>
					<p
						class="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						Knowa's AI assistant is your personal knowledge expert, providing instant answers and
						insights to help you and your team stay informed and productive.
					</p>
				</div>
				<div class="flex flex-col gap-2 min-[400px]:flex-row">
					<Button href="/" class="">Learn More</Button>
					<Button href="/" variant="outline" class="">Try Demo</Button>
				</div>
			</div>
			<img
				alt="AI Assistant"
				class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
				height="310"
				src="/landing2.jpeg"
				width="550"
			/>
		</div>
	</div>
</section>

<section class="w-full py-12 md:py-24 lg:py-32">
	<div class="container px-4 md:px-6">
		<div class="grid items-center justify-center gap-4 text-center">
			<div class="space-y-3">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Knowa Features</h2>
				<p
					class="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					Knowa offers a range of powerful features to help you and your team manage your knowledge
					base with ease.
				</p>
			</div>
			<div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
					<div class="flex flex-col space-y-1.5 p-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-8 w-8 text-gray-500 dark:text-gray-400"
						>
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.3-4.3"></path>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="text-lg font-semibold">Powerful Search</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Quickly find the information you need with Knowa's advanced search capabilities.
						</p>
					</div>
				</div>
				<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
					<div class="flex flex-col space-y-1.5 p-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-8 w-8 text-gray-500 dark:text-gray-400"
						>
							<rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
							<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
							></path>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="text-lg font-semibold">Organized Workspace</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Keep your knowledge base structured and easy to navigate with Knowa's intuitive
							workspace.
						</p>
					</div>
				</div>
				<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
					<div class="flex flex-col space-y-1.5 p-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-8 w-8 text-gray-500 dark:text-gray-400"
						>
							<path
								d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
							></path>
							<path d="M9 18h6"></path>
							<path d="M10 22h4"></path>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="text-lg font-semibold">AI-Powered Insights</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Leverage Knowa's AI assistant to surface relevant information and uncover valuable
							insights.
						</p>
					</div>
				</div>
				<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
					<div class="flex flex-col space-y-1.5 p-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-8 w-8 text-gray-500 dark:text-gray-400"
						>
							<rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
							<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="text-lg font-semibold">Team Collaboration</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Collaborate with your team to build and maintain your knowledge base.
						</p>
					</div>
				</div>
				<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
					<div class="flex flex-col space-y-1.5 p-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-8 w-8 text-gray-500 dark:text-gray-400"
						>
							<path d="m12 14 4-4"></path>
							<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="text-lg font-semibold">Customizable Settings</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Tailor Knowa to your team's needs with a range of customization options.
						</p>
					</div>
				</div>
				<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
					<div class="flex flex-col space-y-1.5 p-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-8 w-8 text-gray-500 dark:text-gray-400"
						>
							<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
						</svg>
					</div>
					<div class="p-6">
						<h3 class="text-lg font-semibold">Cloud-Based Storage</h3>
						<p class="text-gray-500 dark:text-gray-400">
							Access your knowledge base from anywhere with Knowa's secure cloud-based storage.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
