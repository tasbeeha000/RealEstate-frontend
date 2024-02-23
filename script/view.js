  // function openBox() {
      //   alert("Please Login First.");
      // }

      document.addEventListener("DOMContentLoaded", function () {
        var isPropertySaved = localStorage.getItem("isPropertySaved");

        if (isPropertySaved === "true") {
          document.getElementById("property-save").innerHTML = "Saved";
        }
      });

      function clickSave() {
        let buttonText = document.getElementById("property-save").innerHTML;

        if (buttonText === "Save Property") {
          document.getElementById("property-save").innerHTML = "Saved";

          localStorage.setItem("isPropertySaved", "true");
        } else {
          document.getElementById("property-save").innerHTML = "Save Property";
          age;
          localStorage.setItem("isPropertySaved", "false");
        }

        openBox();
      }