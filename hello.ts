type User = {
  id: number,
  name: string,
  age: number
}

type MyExclude<T, U> = T extends U ? never : T;
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>
type NewUser = MyOmit<User, 'id'> & {id: string}

const user: User = {
  id: 123,
  name: 'typescript',
  age: 3
};

const newUser: NewUser = {
  id: 123,
  name: 'typescript',
  age: 3
};
