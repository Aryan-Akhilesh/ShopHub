import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin123@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Aryan Akhilesh",
    email: "aryan99@gmail.com",
    password: bcrypt.hashSync("random", 10),
    isAdmin: true,
  },
  {
    name: "Jonas Lehar",
    email: "jonas21@gmail.com",
    password: bcrypt.hashSync("jonas", 10),
    isAdmin: false,
  },
];

export default users;
