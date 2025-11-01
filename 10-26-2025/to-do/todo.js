const addBtn = document.querySelector('.add-btn');
const modal = document.getElementById('taskModal');
const cancelBtn = document.getElementById('cancelTask');
const saveBtn = document.getElementById('saveTask');

// Show modal on add button click
addBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

// Hide modal on cancel
cancelBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Handle save
saveBtn.addEventListener('click', () => {
    const title = document.getElementById('taskTitle').value.trim();
    const subtitle = document.getElementById('taskSubtitle').value.trim();
    const content = document.getElementById('taskContent').value.trim();

    if (!title || !subtitle || !content) {
        alert("⚠️ Please fill all fields!");
        return;
    }

    // (You can later replace this with dynamic task creation)
    alert(`✅ Task Saved!\nTitle: ${title}\nSubtitle: ${subtitle}\nContent: ${content}`);

    // Clear inputs
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskSubtitle').value = '';
    document.getElementById('taskContent').value = '';

    modal.classList.remove('active');
});
