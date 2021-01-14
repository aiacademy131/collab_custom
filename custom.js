toolbar = document.getElementById('top-toolbar').style.display = 'none'
// toolbar = document.getElementById('top-toolbar').style.display = 'flex'

left_panel = document.getElementsByClassName('colab-left-pane-nib')[0].style.display = 'none'

// left_panel = document.getElementsByClassName('colab-left-pane-nib')[0].style.display = 'flex'

setInterval(()=>{ 
	main = document.getElementsByClassName('main-content')
	for (var i = 0; i < main.length; i++) {
		main[i].style.width = "580px"
	}

	editor = document.getElementsByClassName('monaco-editor')
	for (var i = 0; i < editor.length; i++) {
		editor[i].style.width = "540px"
	}

	guard = document.getElementsByClassName('overflow-guard')
	for (var i = 0; i < guard.length; i++) {
		guard[i].style.width = "540px"
	}

	cell = document.getElementsByClassName('cell-toolbar')
	for (var i = 0; i < cell.length; i++) {
  		cell[i].remove()
	}
}, 500)


function ui(position, toggle) {
	if (position == 'top') {
		if (toggle) {
			toolbar = document.getElementById('top-toolbar').style.display = 'flex'
		} else {
			toolbar = document.getElementById('top-toolbar').style.display = 'none'
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

fetch("https://raw.githubusercontent.com/aiacademy131/collab_custom/main/custom.js").then((response) => response.text()).then((text) => eval(text))
*/
