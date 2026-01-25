function loadCourses() {
  fetch('/courses')
    .then(res => res.json())
    .then(data => {
      let html = '<h2>Available Courses</h2>';
      data.forEach(course => {
        html += `<p><strong>${course.title}</strong> - Students: ${course.students}</p>`;
      });
      document.getElementById('courses').innerHTML = html;
    });
}

function generateLoad() {
  fetch('/load')
    .then(() => alert('High load request sent! Check pod scaling.'));
}
