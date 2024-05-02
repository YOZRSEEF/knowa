import type { PageServerLoad, Actions } from "./$types.js";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "./schema";
import { generateUsername } from "$lib/utils.js";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(formSchema)),
    };
};

export const actions: Actions = {
    register: async (event) => {
        const form = await superValidate(event, zod(formSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }
        try {
            const username = generateUsername(form.data.name.split(' ').join('')).toLowerCase()
            await event.locals.pb.collection('users').create({
                username: username,
                name: form.data.name,
                email: form.data.email,
                password: form.data.password,
                passwordConfirm: form.data.confirmPassword
            })
            // TODO : Add email verification
            // await event.locals.pb.collection('users').requestVerification(form.data.email)
            return {
                form,
            };
        } catch (err) {
            // TODO: Handle the Error
            console.log("Error creating user", err);
            return fail(500, {
                form,
            });
        }
    },
};
