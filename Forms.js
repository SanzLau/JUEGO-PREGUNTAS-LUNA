class Forms{
    constructor(){
    this.usuario = createInput("").attribute("placeholder","Introduce nombre de usuario");
    this.contraseña = createInput("").attribute("placeholder","Introduce contraseña");
    this.inicio = createButton("Aceptar");
    this.omitir =createButton("Omitir");
    }

    //Función posiciones
    setElementsPositions(){
        this.usuario.position(width/2,height/2-130);
       // contraseña
       //inicio
       //omitir
    }

    setElementsStyle(){
        this.usuario.class("customInput");
        //
        //
        //

    }

    display(){
        this.setElementsPositions();
        this.setElementsStyle();
    }

}