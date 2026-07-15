import { test, expect } from '@playwright/test';
test('Get All Books API Test', async ({ request }) => { const response = await request.get('https://demoqa.com/BookStore/v1/Books'); 
console.log(await response.json());
expect(response.status()).toBe(200); });


test('Validate Book API Response', async ({ request }) => {
const response = await request.get('https://demoqa.com/BookStore/v1/Books');
const responseBody = await response.json();
expect(response.status()).toBe(200);
expect(responseBody.books[0].title).toBe('Git Pocket Guide'); });


test('Create User API Test', async ({ request }) => { 
const response = await request.post( 
'https://demoqa.com/Account/v1/User', 
{ 
    data: { 
        userName: 'Umamah19', 
        password: 'Umamah@123' 
    }
}
 ); 
console.log(await response.json()); 
expect(response.status()).toBe(201); 
});