
// ====== spread

let chuoiHM = document.querySelector('.heading').innerHTML.split('');
let chuoiMoi = [...chuoiHM];
let html = '';
for(let kyTu of chuoiMoi){
   html += `
              <span>${kyTu}</span>
           `
    document.querySelector('.heading').innerHTML= html;
}