import "./style.css";
<<<<<<< HEAD
// import axios from "axios";
// const form = document.getElementById("form") as HTMLFormElement;
// form.addEventListener("submit" async (event)=> {
//     event.preventDefault();
//     const formData = new FormData(form);
// 	const formEntries = formData.entries();
//     const data = Object.fromEntries(formData.entries());

//     const user = await axios.post("http://0.0.0.0:3000/users", data);

//     console.log(user.data);

//     alert(`Successfully registered! Your user id is: ${user.data.id}`);

// });
=======
import axios from "axios";
export {};
const form = document.getElementById("form") as HTMLFormElement;
form.addEventListener("submit", async (event) => {
	event.preventDefault();
	const formData = new FormData(form);
	const formEntries = formData.entries();
	const data = Object.fromEntries(formData.entries());

	const user = await axios.post("http://0.0.0.0:3000/users", data);
	console.log(user.data);

	alert(`Successfully registered! Your user id is: ${user.data.id}`);
});
>>>>>>> e6c737d1afd57402175153aa2c957bc56b377c65
