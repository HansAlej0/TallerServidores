// Obtener todas las tarjetas y botones
const cardContents = document.querySelectorAll(".card-content");
const toggleButtons = document.querySelectorAll(".toggleButton");

// Función para alternar la visibilidad del contenido de la tarjeta
function toggleContent(index) {
    if (cardContents[index].style.display === "none") {
        cardContents[index].style.display = "block";
        toggleButtons[index].textContent = "Ocultar Contenido";
    } else {
        cardContents[index].style.display = "none";
        toggleButtons[index].textContent = "Mostrar Contenido";
    }
}

// Agregar un event listener a cada botón de alternar
toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => toggleContent(index));
});
