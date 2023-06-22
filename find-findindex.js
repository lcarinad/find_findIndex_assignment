/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/
const users = [
  { username: "mlewis" },
  { username: "akagen" },
  { username: "msmith" },
];
function findUserByUsername(usersArray, username) {
  return usersArray.find(function (obj) {
    return obj.username === username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function (user) {
    return user.username === username;
  });
  if (foundIndex === -1) return;

  return usersArray.splice(foundIndex, 1)[0];
}
//extra practice below
const students = [
  { firstName: "Lauren", age: 36, grade: 12 },
  { firstName: "Alicia", age: 34, grade: 10 },
  { firstName: "Chrissy", age: 30, grade: 8 },
  { firstName: "Trae", age: 26, grade: 2 },
];
function findStudentIndex(studentsArr, name) {
  let foundIndex = studentsArr.findIndex(function (obj) {
    return obj.firstName === name;
  });
  if (foundIndex === -1) return;
  return studentsArr.splice(foundIndex, 1)[0];
}
