
        let upper=true;
        let textbox = document.getElementById('box')
          function mytext(Alphabet){
            textbox.value += upper?Alphabet.toUpperCase():Alphabet.toLowerCase()
    
          }
          function deletetext(){
            textbox.value = textbox.value.slice(0,-1)
          }
          function myalphacase(){
           
            upper==true?upper=false:upper=true;

            document.querySelectorAll('.alphat').forEach(el=>{
                upper==true?el.innerText=el.innerText.toUpperCase():el.innerText=el.innerText.toLowerCase()
            })

          }
       