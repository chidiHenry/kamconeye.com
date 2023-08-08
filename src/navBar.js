function navBar(){
    const navBar = document.querySelector('#navBar');
const navDiv = document.createElement('div');
navDiv.id = 'navDiv';

navDiv.innerHTML = `<ul>
<li>About Us</li>
<li>Vision Statement</li>
<li>Our Services</li>
<li>Contact Us</li>

</ul>
`

navBar.append(navDiv);

}
 export {navBar}