import Form from "./Form";

const formEl = `<form action="">
<h2>Github User Finder</h2>
<label for="search">username</label>
<input name="search" type="text" />
<button type="submit">Add</button>
</form>`;

const App = class {
  constructor(rootElementID, formElement) {
    document.querySelector(rootElementID).innerHTML = formElement;
    this.users = [];
    this.addUser = this.addUser.bind(this);
  }

  addUser(user) {
    this.users = [user, ...this.users];
    console.log(this.users);
  }
};

export const app = new App("#app", formEl);
const form = new Form(app.addUser);
