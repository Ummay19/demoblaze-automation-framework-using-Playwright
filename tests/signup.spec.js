import { test } from '../fixtures/testSetup.js';
import SignupPage from '../pages/SignupPage.js';

test.describe('Signup Module', () => {

  test('Signup with new user', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.signup('NewUser', 'Password123');
  });

  test('Signup with weak password', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.signup('WeakUser', '123');
  });

  test('Signup with special characters', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.signup('User@123', 'Pass@123');
  });

  test('Signup with very long username', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.signup('VeryLongUsernameTestingAutomation', 'Password123');
  });

  test('Signup with spaces in username', async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.signup('Test User', 'Password123');
  });

});