import { users } from "../data/users.js";

import { v4 as uuid } from "uuid";

const getAllUsers = (req, res) => {
	res.send(users);
};

const getSpecificUser = (req, res) => {
	const { id } = req.params;
	// Using Filter
	/*
  const searchedUser = users.filter((curr) => {
    return curr.id === id;
  });
  if (searchedUser.length > 0) {
    res.send(searchedUser);
  } else {
    res.send(`No User found with id : ${id}`);
  }
  */
	// Using Find
	const searchedUser = users.find((user) => user.id === id);
	searchedUser ? res.send(searchedUser) : res.send(`No User found with id : ${id}`);
};

const createUser = (req, res) => {
	const user = { id: uuid(), ...req.body };
	users.push(user);
	res.send(`User '${user.firstName}' added to the database!`);
};

const updateUser = (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, age, city } = req.body;
	const searchedUser = users.find((user) => user.id === id);
	if (firstName) {
		searchedUser.firstName = firstName;
	}
	if (lastName) {
		searchedUser.lastName = lastName;
	}
	if (age) {
		searchedUser.age = age;
	}
	if (city) {
		searchedUser.city = city;
	}
	// users=[..]
};

const updateUserFull = (req, res) => {};

const deleteUser = (req, res) => {
	const { id } = req.params;
	const searchedUser = users.find((user) => user.id === id);
	let usersAfterDeletion = users.filter((user) => user.id !== id); // To Update
	if (searchedUser) {
		users = [...usersAfterDeletion];
		res.send(`User with id '${id}' removed from the database`);
	} else {
		res.send(`User with id '${id}' not found in the database`);
	}
};

export { getAllUsers, getSpecificUser, createUser, updateUser, updateUserFull, deleteUser };
