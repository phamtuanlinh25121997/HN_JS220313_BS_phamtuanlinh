let students = [
  {
    id: 1,
    Name: "Linh",
    Email: "phamlinh25121997@gmail.com",
    Number: "0925581932",
    countryside: "Ninh Binh",
    Gender: "Nam",
  },
  {
    id: 2,
    Name: "khanh",
    Email: "khanhth@gmail.com",
    Number: "0925666193",
    countryside: "Thanh hoa",
    Gender: "Nam",
  },
  {
    id: 3,
    Name: "Hieu",
    Email: "Hieucamau@gmail.com",
    Number: "092552932",
    countryside: "Ca mau",
    Gender: "Nam",
  },
];
let tbody = document.getElementById("tbody");
let form = document.getElementById("form");
let btnDanger = document.getElementsByClassName("btn-danger");
// console.log(btnDanger);

function renderstudents() {
  tbody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    tbody.innerHTML += ` <tr id =${students[i].id}>
                  <th scope="row">${i + 1}</th>
                  <td>${students[i].Name}</td>
                  <td>${students[i].Email}</td>
                  <td>${students[i].Number}</td>
                  <td>${students[i].countryside}</td>
                  <td>${students[i].Gender}</td>
                  <td>
                  <button type="button" class="btn btn-primary">Edit</button>
                  <button type="button" class="btn btn-danger">Delete</button>
                  </td>
      </tr>`;
  }
}
renderstudents();

form.onsubmit = function (e) {
  e.preventDefault();
  if (
    form.Name.value == "" ||
    form.Email.value == "" ||
    form.Number.value == "" ||
    form.countryside.value == "" ||
    form.Gender.value == ""
  ) {
    alert("dien day du thong tin vao day");
  } else {
    let newStudents = {
      id: Math.floor(Math.random() * 10001),
      Name: form.Name.value,
      Email: form.Email.value,
      Number: form.Number.value,
      countryside: form.countryside.value,
      Gender: form.Gender.value,
    };
    students.push(newStudents);
    renderstudents();
  }
};
tbody.onclick = function (e) {
    if (e.target.classList.contains("btn-primary")) {
      let id = e.target.parentElement.parentElement.id;
      let student = students.find(s => s.id === Number(id));
      form.id.value = id;
      form.Name.value = student.Name;
      form.Email.value = student.Email;
      form.Number.value = student.Number;
      form.countryside.value = student.countryside;
      form.Gender.value = student.Gender;
    }
  };
  renderstudents();
  if (e.target.classList.contains("btn-danger")) {
    let deleteElement = e.target.parentElement.parentElement;
    let id = deleteElement.id;
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === Number(id)) {
        students.splice(i, 1);
        break;
      }
    }
    deleteElement.remove();
    };



  