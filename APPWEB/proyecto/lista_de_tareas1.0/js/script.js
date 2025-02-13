document.addEventListener("DOMContentLoaded", function()  {
    const taskInput = document.getElementById("taskInput");  // Captura el input
    const addTaskBtn = document.getElementById("addTaskBtn"); // Captura el botón de agregar
    const taskList = document.getElementById("taskList"); // Captura la lista <ul>

    function addTask() {
        const taskText = taskInput.value.trim(); // Obtiene el valor del input y elimina espacios innecesarios
        if (taskText === "") return; // Si el campo está vacío, no hace nada

        // Crea un nuevo <li>
        const li = document.createElement("li");
        li.textContent = taskText;

        // Crea un botón "X" para eliminar la tarea
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("deleteBtn"); // Agrega una clase al botón
        deleteBtn.addEventListener("click", () => li.remove()); // Evento para eliminar la tarea

        // Agrega el botón al <li> y luego el <li> a la lista <ul>
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Limpia el campo de entrada después de agregar la tarea
        taskInput.value = "";
    }

    // Evento para ejecutar addTask cuando se haga clic en el botón "Agregar tarea"
    addTaskBtn.addEventListener("click", addTask);
});
