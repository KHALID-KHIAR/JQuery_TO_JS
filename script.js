		function show(elt){
			let item = document.querySelector(elt)
			item.style.display='block' ;
			item.style.opacity =1 ;
		}
		function hide(elt){
			let item = document.querySelector(elt)
			item.style.display='none' ;
		}

		function fadeOut(elt){
		let item = document.querySelector(elt)
		item.style.opacity=1
		let opacity = 1
		let interval = setInterval(function(){
			opacity-=0.1
			item.style.opacity=opacity
			if(opacity<=0){
			clearInterval(interval)
			item.style.display = 'none' ;
			}
		},50)
		}
		function fadeIn(elt){
		let item = document.querySelector(elt)
			item.style.opacity = 0;
			item.style.display = "block";
			let opacity = 0;
			const interval = setInterval(function() {
			opacity += 0.1;
			item.style.opacity = opacity.toString();
			if (opacity >= 1) {
			clearInterval(interval);
			}
	}, 50);
		}
		
		function html(elt,content){
			let item = document.querySelector(elt)
			item.innerHTML=content
		}
		async function css(elt,attribute,value){
			
			let code =`let item = document.querySelector(\'${elt}\');item.style.${attribute}=\'${value}\'`
			const execF = new Function(code);
			await execF() ;
		}
		async function cssMultiple(elt,...style){
        var attributs = []
        var values = [] 
          for(let i =0 ; i<style.length ; i++){
              if(i%2 ===0)
                  attributs.push(style[i])
              else if(i %2!=0)
                  values.push(style[i])
          }
          let code = `let item = document.querySelector(\'${elt}\') ;` ;
          
          for(let j=0 ; j<style.length/2 ; j++){
               code += `item.style.${attributs[j]}=\'${values[j]}\';` ;
          }
          const execCode = new Function(code);
          await execCode() ;
      }
		function offset(elt){
			let item = document.querySelector(elt)
				const rect = item.getBoundingClientRect();
	const scrollTop = window.scrollY || window.pageYOffset;
	const scrollLeft = window.scrollX || window.pageXOffset;
		const offset = {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft
		}
		console.log(offset);
	}

		function slideUp(elt) {
			let duration = 1000
			let element = document.querySelector(elt)
		element.style.overflow = "hidden";
		let height = element.offsetHeight;
		let step = height / (duration / 16);
		function animate() {
			height -= step;
			if (height <= 0) {
			element.style.display = "none";
			element.style.height = "";
			} else {
			element.style.height = height + "px";
			requestAnimationFrame(animate);
			}
		}
		requestAnimationFrame(animate);
		}
		function slideDown(elt,previusHeight) {
			let duration = 1000
			let element = document.querySelector(elt)
			element.style.height = "0px";
		element.style.display = "block";
		element.style.overflow = "hidden";
		let height = 0;
		let step = previusHeight / (duration / 16);
		function animate() {
			height += step;
			if (height >= previusHeight) {
			element.style.height = "";
			} else {
			element.style.height = height + "px";
			requestAnimationFrame(animate);
			}
		}
		requestAnimationFrame(animate);
		}
 
		function Ajax(){
					fetch("http://mockbin.com/request?foo=bar&foo=baz", {
		"method": "POST",
		"headers": {
			"cookie": "foo=bar; bar=baz",
			"x-pretty-print": "2"
		},
		"body": {
			"foo": "bar"
		}
		})
		.then(response => {
		console.log(response);
		})
		.catch(err => {
		console.log(err);
		});
		}
		
