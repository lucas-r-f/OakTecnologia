class Produto {

    constructor() {
        this.arrayProdutos = [];
    }

    salvar(){
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
            this.adiconar(produto)
            this.listaTabela();
            this.alterarVisibilidade();
            this.cancelar();
        }

        
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let tdNome = tr.insertCell();
            let tdValor = tr.insertCell();

            tdNome.innerText = this.arrayProdutos[i].nomeProduto;
            tdValor.innerText = this.arrayProdutos[i].valorProduto;
        }
    }

    ordenar(){
        this.arrayProdutos.sort((a,b) =>{
           let valorA = parseFloat(a.valorProduto.replace(',', ','));
           let valorB = parseFloat(b.valorProduto.replace(',', ','));

           return valorA - valorB
        });

         this.listaTabela();
    }


    adiconar(produto){
        this.arrayProdutos.push(produto);
    }

    lerDados(){
        let produto = {}

        produto.nomeProduto = document.getElementById('nome').value;
        produto.descricaoProduto = document.getElementById('descricao').value;
        produto.valorProduto = document.getElementById('valor').value;

        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == '') {
            msg += '- Informe o nome do produto \n'
        }

        if(produto.descricaoProduto == '') {
            msg += '- Informe a descrição do produto \n'
        } 

        if(produto.valorProduto == '') {
            msg += '- Informe o valor do produto \n'
        }

        if(msg != ''){
            alert(msg);
            return false;
        }

        return true;
    }

    cancelar(){
       document.getElementById('nome').value = '';
       document.getElementById('descricao').value = '';
       document.getElementById('valor').value = '';
    }

    alterarVisibilidade() {
        document.getElementById('formulario').style.display = 'none';
        document.getElementById('tabela').style.display = 'block';
    }

    exibirFormulario(){
        document.getElementById('formulario').style.display = 'block';
        document.getElementById('tabela').style.display = 'none';
    }
}

var produto = new Produto();