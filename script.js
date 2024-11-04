// Sample JavaScript to populate courses or add interactivity
document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 1, name: "Math for Beginners", duration: "4 weeks" },
        { id: 2, name: "Introduction to Coding", duration: "6 weeks" }
    ];

    const coursesSection = document.getElementById('courses');
    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.textContent = `${course.name} - Duration: ${course.duration}`;
        coursesSection.appendChild(courseItem);
       
    });
});
