    console.log("hola");

    function add_li()
    {
        var tareaNueva=document.getElementById("tareaNueva").value;
        var li=document.createElement('li');
        li.id=tareaNueva;
        li.innerHTML=tareaNueva + " " + "<span onclick='eliminar(this);'> ✖ </span>";
        document.getElementById("listaDesordenada").appendChild(li);
        
        return false;
    }


    function eliminar(elemento)
    {
        var id=elemento.parentNode.getAttribute("id");
        node=document.getElementById(id);
        node.parentNode.removeChild(node);
        // return false;
    }

    function borraTodo(listaDesordenada)
    {
        var id=elemento.parentNode.getAttribute("id");
        node=document.getElementById(id);
        node.parentNode.removeChild(node);
    }
