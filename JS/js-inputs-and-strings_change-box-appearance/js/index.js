/*

Change the appearance of the box according to the values of the sliders 
(color, border radius, rotation)

– [ ] Add an event listener for each input element.
– [ ] When the slider control of inputColor is moved, change the background 
      color of the box. Hint: You need to work with the hsl() functional 
      notation for colors.
– [ ] When the slider control of inputRadius is moved, change the border radius of 
      the box. If the control reaches the right end, make the box look like a circle.
– [ ] When the slider control of inputRotation is moved, rotate the box. Hint: 
      You may need to work with the CSS property "transform" and a value that contains 
      "rotate" and "deg".

Hint: You can work with the property "style", just like you worked with the property 
"classList".

For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/
const colorSlider = document.querySelector('[data-js="input-color"]');
const radiusSlider = document.querySelector('[data-js="input-radius"]');
const rotationSlider = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

colorSlider.addEventListener("input", function () {
  //   const colorSliderValue = event.target.value;
  //   let red = colorSliderValue;
  //   let green = 255 - colorSliderValue;
  //   let blue = 128;
  //   box.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  // + EVENT AS PARAMETER
  box.style.backgroundColor = `hsl(${colorSlider.value}, 100%, 50%)`;
});

radiusSlider.addEventListener("input", function () {
  box.style.borderRadius = `${radiusSlider.value}%`;
  //   box.style.borderRadius = radiusSlider.value + "%";
});

rotationSlider.addEventListener("input", function () {
  box.style.transform = `rotate(${rotationSlider.value}deg)`;
  //   box.style.transform = "rotate(" + rotationSlider.value + "%)";
});
