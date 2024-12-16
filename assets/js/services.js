var demoContent= `
<figure>
<img src="assets/images/resource/service-details.jpg" alt="">
</figure>
<h2>Enhancing Real-world Experiences with AR <span>Technology.</span> </h2>
<p>The applications of AR are vast and diverse. From entertainment and gaming, where users can see virtual characters in their surroundings, to education, where complex subjects can be visualized and explained in an immersive way,. We understand that every business has unique needs. Our technology solutions are tailored to match your specific requirements, ensuring optimal performance and efficiency. Our dedicated team of technology professionals comprises experienced engineers, developers, and researchers who are passionate about pushing the boundaries of technology. We understand that every business has unique needs. Our technology solutions are tailored to match your specific requirements, ensuring optimal performance and efficiency.</p>
<div class="row">
<div class="col-lg-6 col-md-12">
    <li> <a href="#"><i class="icon-04"></i> Human Resources</a></li>
</div>
<div class="col-lg-6 col-md-12">
    <li> <a href="#"><i class="icon-04"></i> Web Development</a></li>
</div>
<div class="col-lg-6 col-md-12">
    <li> <a href="#"><i class="icon-04"></i> Content Writing </a></li>
</div>
<div class="col-lg-6 col-md-12">
    <li> <a href="#"><i class="icon-04"></i> IT Support</a></li>
</div>
</div>
<p>
The applications of AR are vast and diverse. From entertainment and gaming, where users can see virtual characters in their surroundings, to education, where complex subjects can be visualized and explained in an immersive way,. We understand that every business has unique needs. Our technology solutions are tailored to match your specific requirements, ensuring optimal performance and efficiency. 
</p>`;
var jsonDemoData = {
    items: [
        { 
            key: 'asistente', 
            title: 'Asistente Administrativo',
            content: `
            <b>Simplifica tu día a día con un asistente administrativo confiable</b>
            <br>
            ¿Te gustaría liberarte de las tediosas tareas administrativas y enfocarte en lo que realmente importa para tu negocio? ¡Yo puedo ayudarte!
            <br>
            Como tu asistente administrativo, estoy comprometido a proporcionarte un servicio excepcional. Estoy dispuesto a asumir cualquier tarea que necesites delegar, desde la gestión de documentos hasta la programación de reuniones y más.
            <br>
            Mi enfoque es simple: trabajaré arduamente para completar todas tus tareas de manera eficiente y precisa. Además, si alguna tarea se encuentra fuera de mis capacidades o conocimientos actuales, te lo haré saber de inmediato y buscaré soluciones alternativas.
            <br>
            No importa cuán desafiante sea la tarea, estoy listo para enfrentarla y aprender en el proceso. Tu satisfacción es mi prioridad número uno.
            <br>
            Libérate del estrés administrativo y permite que yo me encargue de ello. ¡Contáctame hoy mismo y descubre cómo puedo hacer tu vida laboral mucho más fácil!
            <br>
            <br>
            
            <b>¡Optimiza tu tiempo y delega tus tareas administrativas!</b><br>
            ¿Te encuentras abrumado por el exceso de trabajo administrativo? ¡No te preocupes más! Como tu asistente administrativo, estoy aquí para ayudarte en todas tus necesidades organizativas y de gestión.
            <br>Mi compromiso es claro: estoy dispuesto a abordar cualquier tarea que necesites delegar. Desde la gestión de correos electrónicos hasta la preparación de informes y la coordinación de agendas, me aseguraré de que todo se realice de manera eficiente y sin problemas.
            <br>Además, no temas pedirme tareas que puedan desafiarme. Estoy completamente abierto a aprender cosas nuevas y enfrentar nuevos desafíos. Si alguna tarea excede mis capacidades o conocimientos, te lo haré saber de inmediato y trabajaremos juntos para encontrar una solución.
            <br>Deja que tu carga administrativa se convierta en mi responsabilidad, para que puedas concentrarte en lo que realmente importa: hacer crecer tu negocio. ¡Contáctame hoy mismo y descubre cómo puedo facilitar tu vida laboral!
            <br><br>
            <hr>
            <h4>Algunas de las tareas realizadas en el pasado</h4> 
            <ul style="width: 400px;">
              <li>Soporte Técnico</li>
              <li>Atención al Cliente</li>
              <li>Coordinación, seguimiento y derivacion de tareas</li>
              <li>Generación de boletas</li>
              <li>Tareas de Ofimatica, Exel</li>
              <li>Gestion Multiple Correos</li>
              <li>Aprender y usar nuevas Apps</li>
              <li>Otras tareas con mis conocimientos:
                <ul>
                  <li>Programación</li>
                  <li>Configuraciones</li>
                  <li>Capacitacion</li>
                  <li>Otros</li>
                </ul>
              </li>
            </ul>
            `
        },
        { 
            key: 'programacion', 
            title: 'Programación y Configuraciones',
            content: 'Aún no redacto este servicio'
        },
        { 
            key: 'web_y_mail', 
            title: 'Desarrollo web y mailing',
            content: 'Aún no redacto este servicio'
        },
        { 
            key: 'clases_y_asesorias', 
            title: 'Clases particulares y Asesorias',
            content: 'Aún no redacto este servicio'
        },
        { 
            key: 'soporte', 
            title: 'Soporte TI',
            content: demoContent
        }
    ]
};

function populateServices(selectedService) {
    if(!selectedService||selectedService==''){
        selectedService='asistente';
    }
    var ulElement = document.querySelector('.service__details__1__cat');
    var serviceContent = document.querySelector('.service__right');
    if (ulElement) {
        // Clear existing content
        ulElement.innerHTML = '';
        // Populate with <li> elements using data from JSON
        jsonDemoData.items.forEach(function(item) {
            var li = document.createElement('li');
            if(selectedService==item.key){
                li.classList.add('active');
            }
            li.innerHTML = '<a href="#'+item.key+'">'+item.title+' <i class="icon-02"></i></a>';
            ulElement.appendChild(li);
        });
        ulElement.addEventListener('click', function(event) {
            //event.preventDefault(); //Esto solo evita que cambie la url y si queremos que pase eso.
            var targetIndex = event.target.getAttribute('href').substring(1);
            populateServices(targetIndex);
        });
    } else {
        console.log('Services UL not found.');
    }
    if(serviceContent){
        serviceContent.innerHTML='';
        jsonDemoData.items.forEach(function(item) {
            if(selectedService==item.key){
                serviceContent.innerHTML=item.content;
            }
        });
    }else {
        console.log('Services content not found.');
    }
}
window.onload = function () {
    populateServices(window.location.hash.substring(1));
};