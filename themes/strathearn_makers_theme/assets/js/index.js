"use strict";

const form = document.getElementsByClassName("needs-validation")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  form.classList.add("was-validated");

  if(form.checkValidity()) {
    let data = new FormData(e.target);

    fetch(e.target.action, {
      method: form.method,
      body: data,
      headers: {
        "Accept": "application/json"
      }
    }).then(response => {
        if (response.ok) {
          alert("Your feedback was sent, thank you.")
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              console.error(data["errors"].map(error => error["message"]).join(", "));
            }

            alert("Apologies, there was a problem in sending your feedback.")
          });
        }
      }).catch(e => {
        alert("Apologies, there was a problem in sending your feedback.")
      });
  }
});
