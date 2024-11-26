import { redirect } from '@sveltejs/kit';

export async function load({ fetch }) {
    try {
        const response = await fetch('/api/validate-jwt', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (response.ok) {
            const data = await response.json();
            return { userId: data.userId };
        } else {
            throw new Error('Unauthorized');
        }
    } catch (error) {
        throw redirect(302, '/login');
    }
}
