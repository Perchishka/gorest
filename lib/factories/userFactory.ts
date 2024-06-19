

interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
  }

  export const test = ({
    user :{
      
    }
  });

  const user = define<User>({
    id: random, // This will be a random integer each invocation
    firstName: i => `Bob #${i}`, // `i` will be incremented each invocation
    lastName: "Smith", // This will always be the hardcoded value
    age: sequence // This will increment each invocation
  });