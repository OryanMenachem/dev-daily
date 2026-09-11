window.COURSES = [
  "sqlserver"
];

window.getCourse = function (id) {
  return window.CONTENT_PACKS[id];
};

window.getAllCourses = function () {
  return window.COURSES
    .map(function (id) { return window.CONTENT_PACKS[id]; })
    .filter(Boolean);
};
