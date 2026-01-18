document.addEventListener("DOMContentLoaded", () => {
  const value = localStorage.getItem("clickVal");

    if (value == null){

    } else {
        const container = document.getElementById('pContainer')
        const p = document.createElement('p');
        p.textContent = `Why did you click no ${value} times? 😡`;
        container.appendChild(p);
        console.log(value); 
    }
});
