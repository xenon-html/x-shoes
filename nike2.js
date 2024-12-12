
      const inputBox = document.getElementById("input-box");
      const listContainer = document.getElementById("list-container");

      function addTask(){
          if(inputBox.value === ''){
            alert("You didnt add to your list!");
          }
          else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
          } 
          inputBox.value = "";
          saveData();
      }
      listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
          e.target.classList.toggle("checked");
          saveData();
        }
        else if(e.target.tagName === "SPAN"){
              e.target.parentElement.remove(); 
              saveData();
            }

      }, false);

      function saveData(){
        localStorage.setItem("data", listContainer.innerHTML)
      }
      function showTask(){
        listContainer.innerHTML =localStorage.getItem("data");
      }



      const toggleButton = document.getElementById('toggleButton');
      const floatingSection = document.getElementById('floatingSection');
      const closeButton = document.getElementById('closeButton');

      // Show or hide the section when the button is clicked
      toggleButton.addEventListener('click', () => {
        if (floatingSection.style.display === 'none' || floatingSection.style.display === '') {
          floatingSection.style.display = 'block';
          toggleButton.textContent = 'Hide list'; // Change button text
        } else {
          floatingSection.style.display = 'none';
          toggleButton.textContent = 'Shopping-list'; // Change button text
        }
      });

      // Hide the section when the close button inside it is clicked
      closeButton.addEventListener('click', () => {
        floatingSection.style.display = 'none';
        toggleButton.textContent = 'Shopping-list'; // Reset button text
      });

