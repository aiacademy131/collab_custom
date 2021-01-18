document.getElementById('top-toolbar').style.display = 'none'
document.getElementsByClassName('top-floater')[0].style.display = 'none'

// document.getElementById('top-toolbar').style.display = 'flex'
document.getElementsByClassName('colab-left-pane-nib')[0].style.display = 'none'
// document.getElementsByClassName('colab-left-pane-nib')[0].style.display = 'flex'


setInterval(()=>{ 
	main = document.getElementsByClassName('main-content')
	for (var i = 0; i < main.length; i++) {
		main[i].style.margin = "0 auto"
		main[i].style.width = "880px"
	}

	cell = document.getElementsByClassName('cell-toolbar')
	for (var i = 0; i < cell.length; i++) {
  		cell[i].remove()
	}
}, 500)


function ui(position, toggle) {
	if (position == 'top') {
		if (toggle) {
			document.getElementById('top-toolbar').style.display = 'flex'
			document.getElementsByClassName('top-floater')[0].style.display = 'block'
		} else {
			document.getElementById('top-toolbar').style.display = 'none'
			document.getElementsByClassName('top-floater')[0].style.display = 'none'
		}
	} else {
		if (toggle) {
			document.getElementsByClassName('colab-left-pane-nib')[0].style.display = 'flex'
		} else {
			document.getElementsByClassName('colab-left-pane-nib')[0].style.display = 'none'
		}
	}
	
}
window.ui = ui


/*
fetch("https://raw.githubusercontent.com/aiacademy131/collab_custom/main/custom.js")
    .then((response) => response.text())
    .then((text) => eval(text))
    .then(() => {
    })

fetch("https://raw.githubusercontent.com/aiacademy131/collab_custom/main/customui.js").then((response) => response.text()).then((text) => eval(text))
*/
