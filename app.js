
const simpleAlertBtn = document.querySelector('#simpleAlertBtn');
const infoAlertBtn = document.querySelector('#infoAlertBtn');
const warningAlertBtn = document.querySelector('#warningAlertBtn');
const errorAlertBtn = document.querySelector('#errorAlertBtn');
const successAlertBtn = document.querySelector('#successAlertBtn');
const optionsAlertBtn = document.querySelector('#optionsAlertBtn');



simpleAlertBtn.addEventListener('click', () =>{
  const name = document.querySelector('#firstName').value;
  
  if (name) {
    swal("Salam", `this a simple alert Mr ${name} `);
  } else {
    swal("Salam", `this a simple alert Mr Anonyme `);
  }
  
});

infoAlertBtn.addEventListener('click', () =>{
  const name = document.querySelector('#firstName').value;
  if (name) {
    swal("Salam", `this a info alert Mr ${name} `, "info");
  } else {
    swal("Salam", `this a info alert Mr Anonyme `, "info");
  }
  
});

warningAlertBtn.addEventListener('click', () =>{
  const name = document.querySelector('#firstName').value;
  if (name) {
    swal("Salam", `this a warning alert Mr ${name} `, "warning");
  } else {
    swal("Salam", `this a warning alert Mr Anonyme `, "warning");
  }
  
});

errorAlertBtn.addEventListener('click', () =>{
  const name = document.querySelector('#firstName').value;
  if (name) {
    swal("Salam", `this a error alert Mr ${name} `, "error");
  } else {
    swal("Salam", `this a error alert Mr Anonyme `, "error");
  }
  
});

successAlertBtn.addEventListener('click', () =>{
  const name = document.querySelector('#firstName').value;
  if (name) {
    swal("Salam", `this a success alert Mr ${name} `, "success");
  } else {
    swal("Salam", `this a success alert Mr Anonyme `, "success");
  }
  
});

optionsAlertBtn.addEventListener('click', () =>{
  const name = document.querySelector('#firstName').value;
  if (name) {
    swal({
      title: ` M3alééém a khay: ${name}!`,
      text: "Zid 9ra o 3emer rassek ...",
      icon: "success",
      button: "Salina",
    });
  } else {
    swal({
      title: ` M3alééém a khay !`,
      text: "Zid 9ra o 3emer rassek ...",
      icon: "success",
      button: "Salina",
    });
  }
  
});

