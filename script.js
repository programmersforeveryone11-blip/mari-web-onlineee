function showView(viewId) {
    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active-view');
    });
    document.getElementById(viewId + '-view').classList.add('active-view');
    window.scrollTo(0,0);
}

function openEnroll(courseName) {
    document.getElementById('modal-course-title').innerText = 'Inscripción: ' + courseName;
    document.getElementById('enrollModal').style.display = 'flex';
}

function closeEnroll() {
    document.getElementById('enrollModal').style.display = 'none';
}

function finishEnroll(event) {
    event.preventDefault();
    const name = document.getElementById('user-name').value;
    document.getElementById('user-greeting').innerText = '¡Bienvenida, ' + name + '!';
    closeEnroll();
    document.getElementById('nav-aula').style.display = 'inline-block';
    showView('dashboard');
}

function setLesson(title) {
    document.getElementById('lesson-title').innerText = 'Lección: ' + title;
}

function toggleModulo(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('span:last-child');
    content.classList.toggle('active');
    icon.innerText = content.classList.contains('active') ? '-' : '+';
}
