async function loadCourses() {
  const res = await fetch("/courses");
  const data = await res.json();

  const list = document.getElementById("courses");
  list.innerHTML = "";

  data.forEach(course => {
    const li = document.createElement("li");
    li.textContent = `${course.title} — ${course.students} students`;
    list.appendChild(li);
  });
}

async function generateLoad() {
  await fetch("/load");
  alert("High load generated! Check pod scaling.");
}
