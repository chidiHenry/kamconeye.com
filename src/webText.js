function webText(){
const text = document.querySelector('.webText');

const textDiv = document.createElement('div');

textDiv.className = 'textDiv';
textDiv.innerHTML = 
`<p>Welcome to KAMCON Eye care, your leading destination for comprehensive eye care and vision solutions. We are dedicated to providing exceptional eye health services and personalized care to our valued patients. With a team of highly skilled optometrists, and support staff, we strive to deliver the highest standard of eye care in a warm and welcoming environment.

<br><br>At KAMCON Eye care, we believe in investing in the latest advancements in eye care technology. We are equipped with modern age diagnostic tools and treatment equipment, allowing us to accurately assess and manage a wide range of eye conditions. From advanced imaging systems to computer-assisted platforms, we leverage these resources to deliver precise diagnoses and tailored treatment plans.

<br><br>Our comprehensive range of services covers all aspects of eye care, addressing the diverse needs of our patients. Whether you require routine eye exams, specialized consultations, our expert team is here to guide you through every step of the process. Our services include: comprehensive eye check, Glaucoma screening, Contact lens practice, Optical and stylish frames, Low vision service, and All Optical Service. 
<span id="dots">...</span><span id="more">

<br><br>Comprehensive Eye Examinations: Regular check-ups are crucial for maintaining optimal eyehealth. Our skilled optometrists conduct thorough examinations to assess your vision, identify potential issues, and prescribe corrective measures.

<br><br>Vision Correction: We offer a wide range of vision correction options, including prescription glasses, contact lenses, and advanced refractive procedures such as objective refraction and subjective refraction. Our experienced team will guide you towards the best solution to achieve clear and comfortable vision.

<br><br>At KAMCON Eye care, we prioritize the well-being and satisfaction of our patients. From the moment you step through our doors, our friendly and knowledgeable staff will greet you with a warm smile and ensure that your visit is as comfortable as possible. We take the time to listen to your concerns, answer your questions, and develop personalized treatment plans tailored to your specific needs.


</span></p>
<button onclick="myFunction()" id="myBtn">Read more</button>
`
text.appendChild(textDiv);



}



export {webText}