let hex_colors;//#5F3152, #874D6E, #DCAB74, #F4D8A0, #5C9696

ta.addEventListener("input",()=>{
  hex_colors = ta.value.split(",")
  swatches.innerHTML = "";
  let outputRy = [] 
  hex_colors.forEach(hex=>{
  hex = hex.trim();
    
    
  if(validateHex(hex)) { 
  let rgb = display_rgb(hex2rgb(hex2ry(hex)))
  let hsl = display_hsl(hex2hsl(hex2ry(hex)))
  
  outputRy.push(createOutput({hex,rgb,hsl}));  
  createColor({hex,rgb,hsl});
  }
})
  
 output.value = `[${outputRy.join()}\n]`
  
})


function createColor(cry){
  let div = document.createElement("div");
  div.setAttribute("class","color");
  div.style.background = cry.hex;
  
  for( var key in cry){
   let p = document.createElement("p");
   p.innerHTML = `${key}: ${cry[key]}`
   div.appendChild(p);
}
  swatches.appendChild(div);
}

function createOutput(cry){
  let ry = [];
   for( var key in cry){
     ry.push(`${key}: "${cry[key]}"`)
   }
  return `\n{${ry.join()}}`
}
