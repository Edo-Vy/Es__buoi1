/**
 *  Mảng màu
 */

 const colorList = ["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];
 let html ='';
 let renderButton = () => {
     for(let i=0; i < colorList.length;i++){
         let color = colorList[i];
         html += `
                    <button class=" color-button + ${color}" onclick="handleChangeColor('${color}')"></button>
                 `
     }
     document.querySelector('#colorContainer').innerHTML = html;
 }
 window.onload = function (){
     renderButton();
 }
 window.handleChangeColor = (color) => {
     document.querySelector('#house').className = `house + ${color}`;
 }