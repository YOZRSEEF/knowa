<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		dataType: 'json',
		onUpdated: ({ form: f }) => {
			if (!f.valid) {
				// toast.success("You've successfully signed up!");
				toast.error('Form is invalid!');
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="flex items-center justify-center p-6 md:p-10">
	<div class="w-full max-w-md space-y-6">
		<div class="space-y-2 text-center">
			<h1 class="text-3xl font-bold">Welcome back</h1>
			<p class="text-gray-500 dark:text-gray-400">
				Don't have an account yet?{' '}
				<a class="underline" href="/register"> Sign up </a>
			</p>
		</div>

		<form action="?/login" method="POST" use:enhance class="space-y-4">
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} placeholder="jdoe@me.com" />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="password">
				<Form.Control let:attrs>
					<Form.Label>Password</Form.Label>
					<Input {...attrs} bind:value={$formData.password} type="password" />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Button class="w-full">Login</Form.Button>
		</form>
	</div>
</div>
