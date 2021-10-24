const API_URL = "https://api.github.com/users";

const Form = class {
  constructor(addUser) {
    this.addUser = addUser;

    this.API_URL = "";
    this.searchTerm = "";

    this.searchInput = document.querySelector('input[name="search"]');
    this.searchInput.addEventListener("keyup", () => this.handleKeyUp(event));

    this.submitButton = document.querySelector('button[type="submit"]');
    this.submitButton.disabled = !this.searchTerm;

    this.form = document.querySelector("form");
    this.form.addEventListener("submit", () => this.handleSubmit(event));
  }

  handleKeyUp(event) {
    this.searchTerm = event.target.value.trim();
    this.API_URL = `${API_URL}/${this.searchTerm}`;
    this.submitButton.disabled = !this.searchTerm;
    // console.log(this.API_URL);
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const data = await fetch(this.API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user = await data.json();
      this.addUser(user);
    } catch (error) {
      console.log(error.response);
    }
  }
};

export default Form;
