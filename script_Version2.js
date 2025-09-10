// Set copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Modal logic
const simulateBtn = document.getElementById('simulateWithdraw');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
simulateBtn?.addEventListener('click', ()=> modal.style.display = 'flex');
closeModal?.addEventListener('click', ()=> modal.style.display = 'none');

// Launch dashboard logic
const launch = document.getElementById('launchDashboard');
launch.addEventListener('click', (e)=>{
  if(launch.getAttribute('href') === '#'){
    e.preventDefault();
    alert('Replace with your Streamlit URL once deployed (e.g., https://your-app.streamlit.app).');
  }
});