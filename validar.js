
const getData=()=>{
	const http = new XMLHttpRequest()
	http.onreadystatechange=()=>{
		console.log("onreadystatechange")
		console.log(http.status)
		console.log(http.readyState)
		if (http.status==200 && http.readyState ==4){
			document.getElementById("exito").innerHTML=http.responseText
		}
	}
	http.open("GET","http://127.0.0.1:5500/ajax.txt",true)
    http.send()
}

 
const validarEmail = email =>{
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




/*form.addEventListener('submit', e =>{
    e.preventDefault();
validarInputs();
});*/



const validarInputs =()=> {

	
	//const form=document.getElementById("form_contactos")
	const nombre=document.getElementById("nombre").value.trim();
	const apellido=document.getElementById("apellido").value.trim();
	const telefono=document.getElementById("telefono").value.trim();
	const email=document.getElementById("email").value.trim();
	const tp_contacto=document.getElementById("select").value
	const asunto=document.getElementById("asunto").value.trim();
	const descripcion=document.getElementById("descripcion").value.trim(); 
	
	console.log(nombre,apellido,telefono,email,tp_contacto,asunto,descripcion)
	 //if(){
    let succes=0
    if(nombre === "") {
		document.getElementById("error_1").innerHTML ="El Campo es obligatorio"
	   
	} else if(nombre.length <3){
	    document.getElementById("error_1").innerHTML ="El Campo tiene que tener mas de 3 caracteres"
	    
	}
	else{
	document.getElementById("error_1").innerHTML = '';
    succes +=1
	
	}
    if(apellido === ""){
		document.getElementById("error_2").innerHTML ="El Campo es obligatorio"
	    
	}else if(apellido.length <3){
		document.getElementById("error_2").innerHTML ="El Campo tiene que tener mas de 3 caracteres"
	    
	}
	else{
		document.getElementById("error_2").innerHTML = '';
		succes+=1
	}
    if(telefono.length<=10){
		document.getElementById("error_3").innerHTML ="Ingrese un numero valido"
	   
	}
	else{
		document.getElementById("error_3").innerHTML = '';
		succes+=1
	}
    if(email === "") {
		document.getElementById("error_4").innerHTML ="El Campo es obligatorio"
		
	} else if(!validarEmail(email)){
		document.getElementById("error_4").innerHTML ="El email no es valido"
	    
	}
	else{
		document.getElementById("error_4").innerHTML = '';
		succes+=1
	}
	if(tp_contacto ===""){
       document.getElementById("error_opt").innerHTML ="Elija una opcion"
	   
	}else{
		document.getElementById("error_opt").innerHTML='';
		succes+=1
	}

	if(asunto === ""){
		document.getElementById("error_5").innerHTML ="El Campo es obligatorio"
	}else if(asunto.length <3){
		document.getElementById("error_5").innerHTML ="El Campo tiene que tener mas de 3 caracteres"
        
	}
	else{
		document.getElementById("error_5").innerHTML = '';
		succes+=1
	}
	if(descripcion === "" ){
		document.getElementById("error_6").innerHTML ="El Campo es obligatorio"
	    
	}else if(descripcion.length <10){
		document.getElementById("error_6").innerHTML ="El Campo tiene que tener mas de 10 caracteres"
	    
	}else{
		document.getElementById("error_6").innerHTML = '';
		succes+=1
	}
   console.log(succes)
	if (succes === 7) {
		getData();
	}
 //}
}
//}

