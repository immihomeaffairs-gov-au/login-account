document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("error");
  const loading = document.getElementById("loading");
  errorDiv.textContent = "";

  loading.style.display = "block"; // Show loading gif

  setTimeout(() => {
    fetch("data.json")
      .then(response => response.json())
      .then(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          window.location.href = user.link;
        } else {
          errorDiv.textContent = "Incorrect username or password.";
          loading.style.display = "none";
        }
      })
      .catch(err => {
        errorDiv.textContent = "Error loading data.";
        loading.style.display = "none";
      });
  }, 5000);
});
