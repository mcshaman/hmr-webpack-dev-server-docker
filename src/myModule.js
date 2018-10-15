
const MESSAGE = 'Change this constant and watch me update automatically'

module.exports = function myModule() {
	document.addEventListener('DOMContentLoaded', () => {
		document.querySelector('h1').innerText = MESSAGE
	})
}