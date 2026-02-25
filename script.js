function flashtext(ele,col) {
    var tmpColCheck = document.getElementById( ele ).style.color;

      if (tmpColCheck === 'silver') {
        document.getElementById( ele ).style.color = col;
      } else {
        document.getElementById( ele ).style.color = 'silver';
      }
    } 

    setInterval(function() {
        flashtext('flashingtext','red');
        flashtext('flashingtext2','blue');
        flashtext('flashingtext3','green');
    }, 500 ); //set an interval timer up to repeat the function
