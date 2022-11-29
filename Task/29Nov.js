// ! ------------------------------Morning Session------------------------------------------------
let ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
	// e.target.style.backgroundColor = 'red';

	// alert(e.target.innerHTML);
	if (e.target.style.backgroundColor == 'red') {
		e.target.style.backgroundColor = 'white';
	} else {
		e.target.style.backgroundColor = 'red';
	}
});

// Septicity
// Inline=>Style Tag => External
// We can add one or more class
// Attribute selector
// li[data]{
// css......................
// }
// critical rendering path
// every element in html have a box structure which have four properties
// margin,border ,padding ,content
// ---------------------
// -
// ! ------------------------------AfterNoon Session----------------------------------------------

// pseudo elements
//pseudo class
// % is relative to the parent
// px is absolute unit
// vh & vw relative to view port
// rem & em also relative unit
// rem: 100% of the font size
// em: relative to the font size of the container
// Css animations
// transform
// transition
// Key Frame
