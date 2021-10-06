import React from 'react';

const NokiaKeyBoard = () => {
    let count = 0;
    let arr = [];
    let timer;
    function deBounceBtn(str) {
       
        arr = str.split("");
        if(count >= arr.length) {
            count = 0;
            count++;
        } else {
            count++;
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log('called',arr[count-1], count);
count=0;
        }, 1000);
    }

    var timeout;

function clicked(){
  timeout = setTimeout(function(){
  //Do work here
  alert('You clicked the button for 1300');
  },1300)//Change time according to need but most commonly used time is 1300 milliseconds.
}

function unClickeed(){
  clearTimeout(timeout);
  console.log('2')
}
    return (
        <div>
            <input type="text" />
            <button onClick={() => deBounceBtn("abc")} onMouseDown={() => clicked()} onMouseUp={() => unClickeed()}>2abc</button>
        </div>
    );
}

export default NokiaKeyBoard;