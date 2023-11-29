const addStaff = document.getElementById("myButtonAddStaff");
const showForm = document.getElementById("myFormAddStaff");

// Ấn vào nút Thêm Nhân Viên sẽ hiện ra Form Thêm Nhân Viên
addStaff.addEventListener("click", () => {
  showForm.style.display = "block";
});

// Cấp ID tăng dần
let idCounter = 1;
function ID() {
  const newID = idCounter++;
  return newID;
}

//Tính lương Nhân Viên
function CalSalary(baseSalary, productSalary, productQuantity) {
  let Total = baseSalary + productSalary * productQuantity;
  if (productQuantity < 50) {
    Total *= 0.9;
  } else {
    let more = productQuantity - 50;
    let bonus = productSalary * more * 0.1;
    Total += bonus;
  }
  return Total;
}

// Lấy giá trị từ Form Input để đưa data sang Table Danh Sách Nhân Viên
function addValueStaff() {
  const valueFullName = document.getElementById("InputFullName").value;
  const valueBaseSalary = document.getElementById("InputBaseSalary").value;
  const valueProductSalary =
    document.getElementById("InputProductSalary").value;
  const valueProductQuantity = document.getElementById(
    "InputProductQuantity"
  ).value;
  if (
    valueFullName === "" ||
    valueBaseSalary === "" ||
    valueProductSalary === "" ||
    valueProductQuantity === ""
  ) {
    alert("Please fill in the above information completely!");
  } else {
    const table = document.getElementById("myTable");
    // -1 nghĩa là chèn một dòng mới vào cuối cùng của bảng đó
    const newStaff = table.insertRow(-1);

    const cellID = newStaff.insertCell(0);
    const cellFullName = newStaff.insertCell(1);
    const cellBaseSalary = newStaff.insertCell(2);
    const cellProductSalary = newStaff.insertCell(3);
    const cellTotalSalary = newStaff.insertCell(4);

    cellID.innerHTML = ID();
    cellFullName.innerHTML = valueFullName;
    cellBaseSalary.innerHTML = valueBaseSalary;
    cellProductSalary.innerHTML = valueProductSalary;
    const totalSalary = CalSalary(
      valueBaseSalary,
      valueProductSalary,
      valueProductQuantity
    );
    cellTotalSalary.innerHTML = totalSalary;

    document.getElementById("InputFullName").value = "";
    document.getElementById("InputBaseSalary").value = "";
    document.getElementById("InputProductSalary").value = "";
    document.getElementById("InputProductQuantity").value = "";
    alert("New employee added successfully!");
  }
}

// Sắp xếp danh sách nhân viên tăng dần theo tổng lương
employees.sort((a, b) => {
  const totalSalaryA = a.CalSalary();
  const totalSalaryB = b.CalSalary();
  return totalSalaryA - totalSalaryB;
});

// Report Danh Sách Nhân Viên Vừa Được Thêm
function reViewStaff() {
  const btnReview = document.getElementById("myButtonReview");
  const showListStaff = document.getElementById("myTable");
  const showForm = document.getElementById("myFormAddStaff");

  btnReview.addEventListener("click", () => {
    showListStaff.style.display = "block";
  });
  btnReview.addEventListener("click", () => {
    showForm.style.display = "none";
  });
}
// Report Danh Sách Nhân Viên Vừa Được Sắp Xếp
employees.forEach((employee) => {
  const totalSalaryAB = employee.CalSalary();
});
