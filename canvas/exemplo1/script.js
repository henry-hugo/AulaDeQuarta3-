function desenhar() {
    var figura = document.querySelector("#minhaTela");
     
    if (figura.getContext) {  
        var  circulo1 = figura.getContext("2d");
        var  circulo2 = figura.getContext("2d");    

        var retangulo = figura.getContext("2d");
        retangulo.fillStyle="black";
        retangulo.fillRect(130,110,40,50)   //x,y,width,heigth
       
        var retangulo1 = figura.getContext("2d");
        retangulo1.fillStyle="black";
        retangulo1.fillRect(270,110, 140,50) 

        var linha = figura.getContext("2d");
        linha.lineWidth =5;
        linha.strokeStyle = "yellow";
        linha.moveTo(100,200); //começo da linha
        linha.lineTo(100,100); //fim da linha
        linha.lineTo(450,100); //fim da linha
        linha.lineTo(450,200); // mais linha
        
        linha.moveTo(100,200); // mais linha
        linha.lineTo(130,200); //fim da linha
        
        linha.moveTo(160,200); // mais linha
        linha.lineTo(350,200); //fim da linha

        linha.moveTo(380,200); // mais linha
        linha.lineTo(450,200); //fim da linha

        linha.stroke(); //fim da linha

        document.body.appendChild(figura);
        var ctx = figura.getContext('2d');
        // Desenha uma curva de Bézier quadrática
        ctx.beginPath();
        ctx.moveTo(130, 200); // Início da curva
        ctx.quadraticCurveTo(145, 150, 160, 200); // Parâmetros da curva
        ctx.stroke(); // Desenha a curva

        document.body.appendChild(figura);
        var ctx = figura.getContext('2d');
        // Desenha uma curva de Bézier quadrática
        ctx.beginPath();
        ctx.moveTo(350, 200); // Início da curva
        ctx.quadraticCurveTo(365, 150, 380, 200); // Parâmetros da curva
        ctx.stroke(); // Desenha a curva

        

        function animarCirculo(tempo) {
            circulo1.clearRect(0, 0, figura.width, figura.height);


            retangulo.fillStyle="black";
            retangulo.fillRect(130,110,40,50)   //x,y,width,heigth

            retangulo1.fillStyle="black";
            retangulo1.fillRect(270,110, 140,50);


            linha.lineWidth =5;
            linha.strokeStyle = "yellow";
            linha.moveTo(100,200); //começo da linha
            linha.lineTo(100,100); //fim da linha
            linha.lineTo(450,100); //fim da linha
            linha.lineTo(450,200); // mais linha
            
            linha.moveTo(100,200); // mais linha
            linha.lineTo(130,200); //fim da linha
            
            linha.moveTo(160,200); // mais linha
            linha.lineTo(350,200); //fim da linha
    
            linha.moveTo(380,200); // mais linha
            linha.lineTo(450,200); //fim da linha
    
            linha.stroke(); //fim da linha

            ctx.beginPath();
            ctx.moveTo(130, 200); // Início da curva
            ctx.quadraticCurveTo(145, 150, 160, 200); // Parâmetros da curva
            ctx.stroke(); // Desenha a curva

            ctx.beginPath();
            ctx.moveTo(350, 200); // Início da curva
            ctx.quadraticCurveTo(365, 150, 380, 200); // Parâmetros da curva
            ctx.stroke(); // Desenha a curva

                    
            circulo1.fillStyle = "yellow";
            circulo1.beginPath();
            circulo1.arc(145, 200, 10 + 5 * Math.sin(tempo/50), 0, 2 * Math.PI);
            circulo1.fill();
            circulo1.lineWidth = 1;
            circulo1.strokeStyle = "yellow"; 
            circulo1.stroke();
            requestAnimationFrame(animarCirculo);
            }        requestAnimationFrame(animarCirculo);


            function animarCirculo2(tempo) {
            circulo2.clearRect(0, 0, figura.width, figura.height);


            retangulo.fillStyle="black";
            retangulo.fillRect(130,110,40,50)   //x,y,width,heigth

            retangulo1.fillStyle="black";
            retangulo1.fillRect(270,110, 140,50);


            linha.lineWidth =5;
            linha.strokeStyle = "yellow";
            linha.moveTo(100,200); //começo da linha
            linha.lineTo(100,100); //fim da linha
            linha.lineTo(450,100); //fim da linha
            linha.lineTo(450,200); // mais linha
            
            linha.moveTo(100,200); // mais linha
            linha.lineTo(130,200); //fim da linha
            
            linha.moveTo(160,200); // mais linha
            linha.lineTo(350,200); //fim da linha
    
            linha.moveTo(380,200); // mais linha
            linha.lineTo(450,200); //fim da linha
    
            linha.stroke(); //fim da linha

            ctx.beginPath();
            ctx.moveTo(130, 200); // Início da curva
            ctx.quadraticCurveTo(145, 150, 160, 200); // Parâmetros da curva
            ctx.stroke(); // Desenha a curva

            ctx.beginPath();
            ctx.moveTo(350, 200); // Início da curva
            ctx.quadraticCurveTo(365, 150, 380, 200); // Parâmetros da curva
            ctx.stroke(); // Desenha a curva
                    
            circulo2.fillStyle = "yellow";
            circulo2.beginPath();
            circulo2.arc(365, 200, 10 + 5 * Math.sin(tempo/50), 0, 2 * Math.PI);
            circulo2.fill();
            circulo2.lineWidth = 1;
            circulo2.strokeStyle = "yellow"; 
            circulo2.stroke();
            requestAnimationFrame(animarCirculo2);
            }        requestAnimationFrame(animarCirculo2);

        }
    }


    window.onload=desenhar;







    
        // //desenhando um círculo
        // var circulo1 = figura.getContext("2d"); 
        // // Define a cor de preenchimento para amarelo
        // circulo1.fillStyle = "yellow";
        // circulo1.beginPath(); // usado para iniciar um novo caminho ou forma e para garantir que não haja caminhos ou formas anteriores afetando o desenho do círculo
        // circulo1.arc(170, 300, 60, 0, 1 * Math.PI);
        // //circulo1.arc(centerX, centerY, radius, startAngle, endAngle, anticlockwise) desenha um círculo completo com centro em (centerX, centerY) e raio radius. Os parâmetros startAngle e endAngle são usados para desenhar arcos de círculos. Para desenhar apenas um setor de um círculo, pode-se definir o startAngle e o endAngle para limitar a parte da curva a ser desenhada. O parâmetro anticlockwise é usado para determinar se o arco será desenhado no sentido horário ou anti-horário. Se for true, o arco será desenhado no sentido anti-horário.
        // circulo1.fill(); // preenche o círculo com a cor definida
    

    // function animarCirculo(tempo) {
    //     circulo1.clearRect(0, 0, figura.width, figura.height);
    //     retangulo.fillStyle="blue";
    //     retangulo.fillRect(50,50,300,400);
    //     linha.lineWidth =5;
    //     linha.strokeStyle = "yellow";
    //     linha.moveTo(100,300); //começo da linha
    //     linha.lineTo(160,100); //fim da linha
    //     linha.lineTo(240,300); // mais linha 
    //     linha.lineTo(100,300); // mais linha 
    //     linha.stroke(); //fim da linha
    //     circulo1.fillStyle = "yellow";
    //     circulo1.beginPath();
    //     circulo1.arc(170, 300, 30 + 25 * Math.sin(tempo/50), 0, 2 * Math.PI);
    //     circulo1.fill();
    //     circulo1.lineWidth = 2;
    //     circulo1.strokeStyle = "aqua"; 
    //     circulo1.stroke();
    //     requestAnimationFrame(animarCirculo);
    //     } requestAnimationFrame(animarCirculo);

       


