import { redirect } from '@sveltejs/kit';
import { users } from '../../stores/users';

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
            const userId = data.userId;

            const usersResponse = await fetch('/api/users');

            if (usersResponse.ok) {
                const usersData = await usersResponse.json();
                users.set(usersData); 

                return { userId, users: usersData };
            } else {
                console.error('Failed to fetch users');
                users.set([]);
                return { userId, users: [] };
            }
        } else {
            throw new Error('Unauthorized');
        }
    } catch (error) {
        console.error(error);
        throw redirect(302, '/login');
    }
}
