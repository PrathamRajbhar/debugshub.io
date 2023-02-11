// if (localStorage.getItem('username') != null) {
//   // hide login button in all page
//   document.getElementById('login_btn').style.display = "none";

// };
// let subjectCount = 1;

// function addSubject() {
//   subjectCount++;
//   let subjects = document.getElementById("subjects");
//   let newSubject = document.createElement("div");
//   newSubject.classList.add("subject");
//   newSubject.innerHTML = `<label class="sub-label"  for="subject${subjectCount}">Subject ${subjectCount}:</label>
//                         <input type="text"  id="subject${subjectCount} inp-box" name="subject${subjectCount}" min="0" max="100">
//                         <button class="remove-subject" onclick="removeSubject(this)">Remove Subject</button>`;
//   subjects.appendChild(newSubject);
// }


// function calculate() {
//   let total = 0;
//   let subjects = document.getElementsByName("subject");
//   for (var i = 0; i < subjects.length; i++) {
//     if (subjects[i].value != "") {
//       total += parseInt(subjects[i].value);
//       console.log(total);
//     }
//   }
//   var totalMarks = document.querySelector("#total_label_number_output");
//   // totalMarks.innerHTML = total;
//   // var percentage = (total / (subjects.length * 100)) * 100;
//   // var percantageLabel = document.getElementById("percantage_label-number-output");
//   // percantageLabel.innerHTML = percentage + '%';
//   // console.log(percentage);
//   console.log(total);
// }

// function removeSubject(el) {
//   let subject = el.parentNode;
//   let subjects = document.getElementById("subjects");
//   subjects.removeChild(subject);
//   subjectCount--;
// }
// function to add a new subject input field



// function addSubject() {
//   const subjects = document.getElementById("subjects");
//   const subject = document.createElement("div");
//   subject.classList.add("subject");
//     subject.innerHTML = `
//     <label class="sub-label" for="subject1">Subject :</label>
//     <input type="number" id="subject1 inp-box" name="subject1" min="0" max="100">
//     <button class="remove-subject" onclick="removeSubject(this)">Remove Subject</button>
//   `;
//   subjects.appendChild(subject);
// }


let subjectCounter = 1;

function addSubject() {
  subjectCounter++;
  const subjects = document.getElementById("subjects");
  const newSubject = document.createElement("div");
  newSubject.classList.add("subject");
  // newSubject.innerHTML = `
  //   <label class="sub-label" for="subject${subjectCounter}">Subject ${subjectCounter}:</label>
  //   <input type="number" id="subject${subjectCounter} inp-box" name="subject${subjectCounter}" min="0" max="100">
  //   <i class=" remove-subject bi bi-trash" onclick="removeSubject(this)"></i>
  // `;
  newSubject.innerHTML = `
                                  <form class="form-inline">
                                    <div class="form-group mb-2">
                                      <label for="subject${subjectCounter}" >Subject ${subjectCounter}: </label>
                                    </div>
                                    <div class="form-group mx-sm-3 mb-2">
                                      <input type="number" class="form-control" id="subject1 inp-box" name="subject1" min="0" max="100">
                                    </div>
                                    <button type="submit" class="btn btn-danger mb-2" onclick="removeSubject(this)">Remove</button>
                                  </form>
  `;
  subjects.appendChild(newSubject);
}


// function to remove a subject input field
function removeSubject(element) {
  element.parentNode.remove();
}

// function to calculate total marks and percentage
function calculate() {
  const subjects = document.getElementsByClassName("subject");
  let total = 0;

  // iterate through all subject input fields and add their values
  for (let i = 0; i < subjects.length; i++) {
    const subject = subjects[i].getElementsByTagName("input")[0];
    total += parseInt(subject.value);
  }

  let total_marks_input = document.getElementById("total_marks_input").value;

  // calculate percentage
  const percentage = (total / total_marks_input) * 100;
  console.log(total)
  // display total and percentage in the output box
  document.getElementById("total_label_number_output").innerHTML = total;
  document.getElementById("percantage_label-number-output").innerHTML = percentage.toFixed(2) + "%";
}
