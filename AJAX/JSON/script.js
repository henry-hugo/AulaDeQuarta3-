window.onload = function(){
    var url ="https://api.openweathermap.org/data/2.5/weather?";
    var minhaApi = "b057f5d433a32b396d7b1aadfa385aa3";
    var resultado;
    var cidade;

        cidades.onchange = function(){
            //cria obj ajax
            var ajax = null;
            //testa o navegador
            if(window.XMLHttpRequest){
                ajax = new XMLHttpRequest();
            }else if(window.ActiveXObject){
                ajax = new ActiveXObject("Msxml2.XMLHTTP");
            }
        cidade = cidades.value;
        if(cidade != 0){
            //abri a pag via get 
            ajax.open("GET",url+'appid='+minhaApi+'&q='+cidade+'&units=metric&lang=pt',true);
            ajax.send(null);
            //identificar o estado do carregamento
            ajax.onreadystatechange = function(){
                //ver se chegou no navegador
                if(ajax.readyState ==4){
                    if(ajax.status == 200){
                        resultado = JSON.parse(ajax.responseText);
                        document.getElementById('nome').value = resultado.name;
                        document.getElementById('tempMax').value = resultado.main.temp_max;
                        document.getElementById('tempMin').value = resultado.main.temp_min;
                        document.getElementById('weather').value = resultado.weather[0].description;
                        
                        // console.log(resultado);
                        // console.log(resultado.name);
                        // console.log(resultado.main.temp_min);
                        // console.log(resultado.main.temp_max);
                        // console.log(resultado.weather[0].description);
                    }
                }
            }
        }
    }
}

