
            const items =[
                {
                    id: 0,
                    nome: 'camiseta',
                    img: '',
                    quantidade: 0

                },

                {
                    id: 1,
                    nome: 'short',
                    img:  '',
                    quantidade: 0

                },

                {
                    id: 2,
                    nome: 'chuteira',
                    img: '',
                    quantidade: 0

                },


            ]


            inicializarloja = () =>{

                    var containerProdutos = document.getElementById('produtos');

                    items.map((val)=>{

                        containerProdutos.innerHTML+=`
                        

                        <div class="produtos-single">

                            <img src="`+val.img+`"/>
                            <p>`+val.nome+` </p>
                            <a key= "` +val.id+ `"href ="#">  Adicionar ao carrinho!  </a>

                

                        </div>
                        
                        `;


                    }) 

            }

            inicializarloja();


            atualizarCarrinho = () =>{

                var containerCarrinho = document.getElementById('carrinho');

                    containerCarrinho.innerHTML="";

                    items.map((val)=>{

                        if(val.quantidade > 0){

                        containerCarrinho.innerHTML+=`
    
                           <p> `+val.nome+` | quantidade: `+val.quantidade+`</p>
                            <hr>

    
                            `;
                            
                        }     
                 }) 

            }

                var links = document.getElementsByTagName('a');
                for (var i =0; i < links.length; i ++){
                        links[i].addEventListener("click", function () {
                            
                            let key = this.getAttribute('key');
                            items[key].quantidade++;
                            atualizarCarrinho();
                           return false;

                        })

                }                
                

