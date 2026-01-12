document.addEventListener('DOMContentLoaded', () => {
    // Course array 
    const courses = [
        { code: "CSE 110", name: "Introduction to Programming", credits: 3, completed: true },
        { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
        { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: false },
        { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false },
        { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
        { code: "WDD 231", name: "Frontend Web Development I", credits: 3, completed: false }
    ];

    const courseCards = document.getElementById('course-cards');
    const totalCreditsSpan = document.getElementById('total-credits');
    const allBtn = document.getElementById('all-courses');
    const wddBtn = document.getElementById('wdd-courses');
    const cseBtn = document.getElementById('cse-courses');

    function displayCourses(filteredCourses) {
        courseCards.innerHTML = '';
        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = `course-card ${course.completed ? 'completed' : ''}`;
            card.innerHTML = `
                <h3>${course.code}</h3>
                <p>${course.name}</p>
                <p>Credits: ${course.credits}</p>
            `;
            courseCards.appendChild(card);
        });
        // Calculate total credits using reduce
        const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        totalCreditsSpan.textContent = totalCredits;
    }

    // Initial display
    displayCourses(courses);

    // Event listeners for filtering
    allBtn.addEventListener('click', () => displayCourses(courses));
    wddBtn.addEventListener('click', () => displayCourses(courses.filter(course => course.code.startsWith('WDD'))));
    cseBtn.addEventListener('click', () => displayCourses(courses.filter(course => course.code.startsWith('CSE'))));
});