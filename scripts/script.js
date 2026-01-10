// Dynamic copyright year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Dynamic last modified date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Course array (replace with actual data if provided; example based on typical structure)
const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce students to programming...', technology: ['Python'], completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces students to the World Wide Web...', technology: ['HTML', 'CSS'], completed: true },
    // Add more courses as needed; update 'completed' to true for courses you've finished
];

// Function to display courses
function displayCourses(filteredCourses) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.completed ? 'completed' : ''}`;
        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p><strong>${course.title}</strong></p>
            <p>Credits: ${course.credits}</p>
            <p>${course.description}</p>
            <p>Technologies: ${course.technology.join(', ')}</p>
        `;
        container.appendChild(card);
    });
    // Calculate total credits for displayed courses
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('total-credits').textContent = totalCredits;
}

// Initial display of all courses
displayCourses(courses);

// Filter buttons
document.getElementById('all-courses').addEventListener('click', () => displayCourses(courses));
document.getElementById('wdd-courses').addEventListener('click', () => displayCourses(courses.filter(course => course.subject === 'WDD')));
document.getElementById('cse-courses').addEventListener('click', () => displayCourses(courses.filter(course => course.subject === 'CSE')));

// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', () => {
    const nav = document.getElementById('navigation').querySelector('ul');
    nav.classList.toggle('show');
});