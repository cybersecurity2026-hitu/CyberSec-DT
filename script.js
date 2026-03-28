// Welcome Alert
function showMessage() {
    alert("Welcome to Cybersecurity World 🔐");
}

// Parallax 3D effect on cards
function parallax(e, element) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    element.style.transform = rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05);
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
});