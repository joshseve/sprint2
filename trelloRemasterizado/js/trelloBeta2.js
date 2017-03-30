console.log("hola");

function add_li()
{
    var tareaNueva=document.getElementById("tareaNueva").value;
    if(tareaNueva.length>0)
    {
        if(find_li(tareaNueva))
        {
            var li=document.createElement('li');
            li.id=tareaNueva;
            li.innerHTML=tareaNueva + " " + "<span onclick='eliminar(this);'> ✖ </span>";
            document.getElementById("listaDesordenada").appendChild(li);
        }
    }
    return false;
}

function find_li(contenido)
{
    var el = document.getElementById("listaDesordenada").getElementsByTagName("li");
    for (var i=0; i<el.length; i++)
    {
        if(el[i].innerHTML==contenido)
            return false;
    }
    return true;
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
