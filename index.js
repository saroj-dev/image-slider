let counter = 0;
let img = $(".first_img");
let width = 600;
$(".left").click(() => {
  counter--;
  if (counter < 0) {
    counter = 2;
  }
  console.log(counter);
  img.css("margin-left" , -counter * 600 + "px");
});

$(".right").click(() => {
  counter++;
  if (counter > 2) {
    counter = 0;
  }
  console.log(counter);
  img.css("margin-left" , -counter * 600 + "px");
});
