const container = document.getElementById('studentContainer');
const button = document.getElementById('loadBtn');

button.addEventListener('click', getUsers);

async function getUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    data.forEach((student) => {
        container.innerHTML += `
        <div class="student">
            <h2>${student.name}</h2>
            <p>Email: ${student.email}</p>
            <p>Phone: ${student.phone}</p>
            <p>Website: ${student.website}</p>
        </div>
        `;
    });
}

button.addEventListener("click", function () {
  getUsers();
});