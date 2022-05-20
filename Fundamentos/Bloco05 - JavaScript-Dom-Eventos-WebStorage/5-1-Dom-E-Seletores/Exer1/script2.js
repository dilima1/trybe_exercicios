// const paragraph = document.getElementById("paragraph");
// paragraph.style.color = "red";

const header = document.getElementById("header-container");
header.style.backgroundColor = "#036B52";

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "#036B52";

const emergency = document.getElementsByTagName("h3");
for (let index = 0; index < emergency.length; index += 1) {
  emergency[index].style.backgroundColor = "rgb(13, 179, 13)";
}

const planoDeFundoDiv = document.querySelectorAll("div");
{
  for (let index = 0; index <= 1; index += 1)
    planoDeFundoDiv[index].style.backgroundColor = "rgb(14, 96, 20";

  for (let index = 2; index <= 3; index += 1)
    planoDeFundoDiv[index].style.backgroundColor = "green";
}
