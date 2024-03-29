"use strict"


const url = "https://test-users-api.herokuapp.com/users/";

const getAllUsers = () => {
  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("this is error", error);
    })
    .then(data => {
      return data.data;
    })
    .catch(error => console.log(error))
};

const getUserById = id => {
  return fetch(`${url}${id}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("this is error", error);
    })
    .then(data => {
      return data;
    })
    .catch(error => console.log(error))
};

const addUsers = (name, age) => {
  const newPost = {};
  (newPost.name = name), (newPost.age = age);
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("this is error", error);
    })
    .then(data => data)
    .catch(error => console.log(error))
};

const removeUser = id => {
  return fetch(`${url}${id}`, {
    method: "DELETE"
  })
    .then(() => console.log("success"))
    .catch(error => console.log("error" + error));
};

const updateUser = (id, user) => {
  return fetch(`${url}${id}`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("this is error");
    })
    .then(data => data)
    .catch(error => console.log(error))
};

const form = document.querySelector(".form"),
  result = document.querySelector(".result"),
  inputId = document.querySelector("input[name=id]"),
  inputName = document.querySelector("input[name=name]"),
  inputAge = document.querySelector("input[name=age]");


form.addEventListener("click", getUserValue);

function getUserValue(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "BUTTON") return;

  if (target.dataset.action === "getAll") {
    getAllUsers().then(response => {
      return (result.innerHTML = response.reduce(
        (acc, el) => (acc += `<p>id: ${el.id} Name: ${el.name}, Age: ${el.age}</p>`), ""));
    });
  }

  if (target.dataset.action === "getById") {
    getUserById(inputId.value).then(response => {
      result.textContent = ` id: ${response.data.id} Name: ${response.data.name}, Age: ${response.data.age}`;
    });
  }

  if (target.dataset.action === "add") {
    addUsers(inputName.value, inputAge.value).then(response => {
      result.textContent = `New user: id: ${response.data.id} Name: ${response.data.name}, Age: ${response.data.age}`;
    });
  }

  if (target.dataset.action === "update") {
    const obj = {};
    obj.name = inputName.value;
    obj.age = inputAge.value;
    updateUser(inputId.value, obj).then(response => {
      result.textContent = `User with id:${ response.data.id} edit on: Name: ${response.data.name}, Age: ${response.data.age}`;
    });
  }

  if (target.dataset.action === "remove") {
    removeUser(inputId.value).then(() => {
      result.textContent = `User deleted`;
    });
  }

  inputId.value = null;
  inputName.value = null;
  inputAge.value = null;
}