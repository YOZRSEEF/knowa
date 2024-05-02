<script>
	import '../app.pcss';
	import NavBar from '$lib/navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<Toaster />

<NavBar />

<slot></slot>
