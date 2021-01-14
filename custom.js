toolbar = document.getElementById('top-toolbar').remove()

left_panel = document.getElementsByClassName('colab-left-pane-nib')[0].remove()

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
