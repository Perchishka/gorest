 const userData = {
  validUser: () => ({
    name: 'Book Titleeer',
    gender: 'female',
    email: 'ddfdf@dfdf',
    status: 'active',
  }),

  customUser: (data) => ({
    name: data.name || 'Book Title',
    gender: data.gender || 'female',
    email: data.email || 'ddfdf',
    status: data.status || 'active',
  }),

  userWithEmptyFields: () => ({
    name: '',
    gender: '',
    email: '',
    status: '',
  }),
};

const postData = {
    validPost: () => ({
        id: 123456,
        user_id: 6972325,
        title: 'ddfdf',
        body: 'ddfdfddfdfddfdfddfdfddfdfddfdfddfdfddfdfddfdf',
      }),
}

const todosData = {
    validTodo: () => ({
        id: 123456,
        user_id: 6972325,
        title: "Minima vestigium accusamus aut traho adhaero.",
        due_on: '2023-06-26T00:00:00.000+05:30',
        status: 'completed',
      }),
}


export {userData, postData, todosData}


