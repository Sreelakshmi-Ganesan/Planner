// Add a new goal to the Goals Page
function addGoal() {
    const goalInput = document.getElementById('goalInput');
    const goalList = document.getElementById('goalList');
  
    if (goalInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = goalInput.value;
      
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            li.remove();
        };
      
        li.appendChild(deleteButton);
        goalList.appendChild(li);
      
        goalInput.value = '';
    }
}