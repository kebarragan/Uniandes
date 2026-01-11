
      const panel = document.getElementById("panelCalculadora");
      const pantalla = document.getElementById("pantalla");

      function toggleCalculadora() {
        panel.style.display = panel.style.display === "block" ? "none" : "block";
      }

      function agregar(valor) {
        pantalla.value += valor;
      }

      function limpiar() {
        pantalla.value = "";
      }

      function calcular() {
        try {
          pantalla.value = eval(pantalla.value);
        } catch (e) {
          pantalla.value = "Error";
        }
      }