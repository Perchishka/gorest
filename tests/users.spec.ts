import { test, expect } from '@playwright/test';
import { postData, todosData, userData } from '../lib/data/mocks';
import { buildRequest } from '../lib/helpers/requestBuilder';
import { userApi } from '../lib/api/userapi';

test.describe('Users test', () => {
  
    test('get list of users', async ({ request }) => {
      const api = new userApi(request);
    const response = await api.getusers();
    console.log(response.status());
    expect(response.ok()).toBeTruthy();
  });

  
  test('create user', async ({ request }) => {
    const response = await buildRequest(request, 'user', 'post', {data:userData.validUser()});
    console.log(response);
    expect(response.ok()).toBeTruthy();
  });

  test('get a user post', async ({ request }) => {
    const response = await buildRequest(request, 'userPost', 'get', {id: 6940102});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  });

  test('get a user todos', async ({ request }) => {
    const response = await buildRequest(request, 'userTodos', 'get', {id: 6940102});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  });

  test('Creates a user todo', async ({ request }) => {
    const response = await buildRequest(request, 'userTodos', 'post', {data: todosData.validTodo(), id: 6940102});
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
  });


  test('create a user post', async ({ request }) => {
    const response = await buildRequest(request, 'userPost', 'post', {data: postData.validPost(), id: 6972325});
    console.log(response);
    expect(response.ok()).toBeTruthy();
  });

  test('create user with invalid email', async ({ request }) => {
    const response = await request.post('users', {
        data: userData.customUser({name: ''})
      });
    console.log(await response.json());
    await expect(response).not.toBeOK();
  });

  test('create user with empty fields', async ({ request }) => {
    const response = await request.post('users', {
        data: userData.userWithEmptyFields()
      });
    console.log(await response.json());
    await expect(response).not.toBeOK();
  });

  test('create user with empty empty', async ({ request }) => {
    const response = await request.post('users', {
        data: {
          name: '123',
          gender: 'female',
          email: '',
          status: 'active'
        }
      });
    console.log(await response.json());
    await expect(response).not.toBeOK();
  });

test('update user', async ({ request }) => {
    const response = await request.put('users/6940102', {
        data: {
          name: 'updated name',
          email: 'ddfdf',
          status: 'active'
        }
      });
    console.log(response.json());
    expect(response.ok()).toBeTruthy();
  });

  test('delete user', async ({ request }) => {
    const response = await request.put('users/6940102', {
        data: {
          name: 'updated name',
          email: 'ddfdf',
          status: 'active'
        }
      });
    console.log(response.json());
    expect(response.ok()).toBeTruthy();
  });

});

