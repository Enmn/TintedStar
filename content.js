// Check if the current URL matches a specific pattern
function isClubeEditUrl(url) {
    const regexPattern = /^https:\/\/socialclub\.rockstargames\.com\/crew\/.*\/manage\/edit$/;
    return regexPattern.test(url);
  }

function updateColor(selection, picker) {
  var selectedValue = selection.value;
  createCrewFormColor.value = picker.value + selectedValue;
  crewColor.value = picker.value + selectedValue;
}
  
// Replace the value of the color input fields
function replaceColor() {
    var picker = document.querySelector("#createCrewPreview > div.text.clearfix > div.createCrewFormColor > a > div > span");
    if (picker) {
        picker.remove();
    }
  
    var minicolorspanel = document.querySelector("#createCrewPreview > div.text.clearfix > div.createCrewFormColor > a > div > div");
    if (minicolorspanel) {
        minicolorspanel.remove();
    }

    // Get the "createCrewFormColor" input field and update its value
    var createCrewFormColor = document.querySelector("#createCrewFormColor");
    if (createCrewFormColor) {
        createCrewFormColor.type = "hidden";
    }
      
    // Get the "crewColor" input field and update its value
    var crewColor = document.querySelector("#crewColor");
  
    var customPicker = document.querySelector("#createCrewPreview > div.text.clearfix > div.createCrewFormColor > a > div");
    if (customPicker) {
      var colorPicker = document.createElement("input");
      colorPicker.type = "color";
      colorPicker.id = "color-picker";
      
      // Create element selection
      var selection = document.createElement('select');
      
      var option1 = document.createElement('option');
      option1.value = '00';
      option1.textContent = '00';
      
      var option2 = document.createElement('option');
      option2.value = 'ff';
      option2.textContent = 'FF';
      
      var option3 = document.createElement('option');
      option3.value = 'aa';
      option3.textContent = 'AA';
      
      selection.appendChild(option1);
      selection.appendChild(option2);
      selection.appendChild(option3);
      
      function updateColor() {
        const selectedValue = selection.value;
        createCrewFormColor.value = colorPicker.value + selectedValue;
        crewColor.value = colorPicker.value + selectedValue;
      }
      
      colorPicker.addEventListener("change", function() {
        updateColor();
      });
      
      selection.addEventListener("change", function() {
        updateColor();
      });
      
      customPicker.appendChild(colorPicker);
      customPicker.appendChild(selection);
    }
}
  
// Check if the current URL is a valid club edit URL, and if so, replace the color values
if (isClubeEditUrl(window.location.href)) {
  console.log("The URL is valid.");
  replaceColor();
} else {
  console.log("The URL is not valid.");
}