const inp = document.getElementById('inp');
const button = document.querySelectorAll('button');

for(let btn of button){
    btn.addEventListener('click',(e)=>{
        let inpText = e.target.innerText;
        let length = inp.value.length;

        if(inpText==='x')
            inp.value += '*';        
        else if(inpText === 'C')
            inp.value = "";        
        else if(inpText === 'CE'){
            var tmp = inp.value;
            // console.log(tmp);
            tmp = tmp.substr(0, tmp.length-1);
            // console.log(tmp);
            inp.value = tmp;
        }
        else if(inpText === '^'){
            inp.value = inp.value * inp.value;
        }
        else if(inpText === '='){
            try{
                inp.value=eval(inp.value);
            }
            catch(e){
                inp.value ="Invalid Operation";
            }
        }
            
        else
        inp.value +=inpText;
    })
}