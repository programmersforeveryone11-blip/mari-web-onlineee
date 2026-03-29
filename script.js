function showView(viewId) {
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active-view'));
    document.getElementById(viewId + '-view').classList.add('active-view');
    window.scrollTo(0, 0);
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function openEnroll(courseName) {
    // Aquí puedes añadir la lógica del modal que tenías antes
    alert("Iniciando inscripción para: " + courseName);
}
