import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "./schema";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(formSchema)),
    };
};

export const actions: Actions = {
    login: async (event) => {
        const form = await superValidate(event, zod(formSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }
        try {
            await event.locals.pb.collection("users").authWithPassword(
                form.data.email,
                form.data.password
            )
            if (!event.locals.pb.authStore.model.verified) {
                // TODO: add email verification first 
            }

        } catch (err) {
            // TODO: Handle the Error
            console.log("Error creating user", err);
            return fail(500, {
                form,
            });
        }
        // TODO: replace the landing page with the app
        throw redirect(303, "/")
    },
};
