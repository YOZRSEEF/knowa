<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<header
	class="min-w-screen sticky top-0 flex h-16 items-center justify-between border-b border-primary bg-background px-4"
>
	<a href="/" class="text-3xl font-bold">Knowa</a>
	<nav>
		<Button href="/login">Login</Button>
		<Button variant="ghost" href="/register">Register</Button>
	</nav>
</header>
