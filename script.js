	document
	    	.querySelector('#newpoint')
	    	.addEventListener('submit', function onSubmit(e) {
		      const form = e.target;

		      const time_start = Number(form.start_time.value)+Number(form.day_of_begin.value);
		      const time_stop = Number(form.stop_time.value)+Number(form.day_of_end.value)+1;
		      
		      document.getElementById("first-box").style["grid-column"] = time_start+"/"+time_stop;
		      document.getElementById("first-box").style.width = "100%";
		      document.getElementById("dynamic-points").innerHTML += renderPoints();
		      document.getElementById("first-box").innerHTML += `Day: ${detTime(form.day_of_begin.value)}`;

		      console.log(time_start);
		      function renderPoints(){
		       	return `
		       	<div style="width:100%; height:15px; border-left:1px solid #ccc; grid-row:1; grid-column:${time_start}"></div>
		       	<div style="width:100%; height:15px; border-left:1px solid #ccc; grid-row:1; grid-column:${time_stop}"></div>
		       	`;

			  }
			  function detTime(day){
			  	switch(time_start) {
				  case 0: 
				    return 'Нд';
				    break;
				  case 24: 
				    return 'Пн';
				    break;
				  case 48: 
				    return 'Вт';
				    break;
				  case 72: 
				    return 'Ср';
				    break;
				  case 96: 
				    return 'Чт';
				    break;
				  case 120: 
				    return 'Пт';
				    break;
				  case 144: 
				    return 'Сб';
				    break;
				}
			  }
		     //document.getElementById("dynamic-points").style["background-color"] ="red"; 
		      //;

		     // fetchContent(form.s_text.value);
		      e.preventDefault();
		      e.stopPropagation();
	    	});

