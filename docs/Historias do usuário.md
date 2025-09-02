# **0\) visitante faz cadastro:**

# sou um visitante e desejo fazer cadastro no site para que eu possa comprar e vender produtos

Teste Caminho feliz:  
visitante envia cadastro com idade válida, email não utilizado e com todos os campos preenchidos  
visitante envia cadastro corretamente com uma senha de 1 caractere  
Teste Caminho triste:  
visitante envia cadastro porém é menor de idade  
visitante envia cadastro porém email está em uso

# **1\) usuario busca produto:**

sou um usuário e desejo encontrar um produto para que possa comprá-lo  
Teste Caminho feliz:   
usuário pesquisa um produto existente  
Teste Caminho triste:  
usuário pesquisa um produto inexistente  
usuário pesquisa o nome de outro usuário

# **2\) usuário filtra busca:**

sou um usuário e desejo visualizar do produto mais barato ao mais caro para que eu possa encontrar um produto dentro do meu limite  
Teste Caminho feliz:usuário seleciona filtros que contém produtos correspondentes  
Teste Caminho triste:usuário seleciona filtros que não contém produtos correspondentes

# **3\) usuário usa o carrinho**

sou um usuário e quero adicionar um produto no carrinho para que eu não precise achar novamente um anúncio  
Teste Caminho feliz:usuário adiciona ao carrinho um produto que não está no carrinho  
Teste Caminho triste:usuário tenta adicionar ao carrinho um produto que está no carrinho

# **4\) usuário faz pedido**

sou um usuário e quero fazer o pedido dos produtos presentes no meu carrinho para que eu possa obtê-los  
Teste Caminho feliz:  
usuário faz pedido com endereço cadastrado  
usuário faz pedido com um novo endereço  
Teste Caminho triste:  
usuário tenta fazer pedido com o carrinho vazio  
usuário tenta fazer pedido sem endereço de entrega

# **5\) usuário avalia**

sou um usuário e quero compartilhar minha experiencia com um produto para expressar minha gratidão/insatisfação  
Teste Caminho feliz:  
usuário avalia produto que comprou com 150 caracteres e com 2 estrelas  
usuário avalia produto apenas com estrelas  
Teste Caminho triste:  
usuário tenta avaliar produto que não comprou   
usuário tenta avaliar produto que já avaliou

# **6\) Vendedor cadastra produto (core story):**

sou um vendedor de produtos diversos e desejo anunciar meus produtos para que  
eles sejam divulgados e vendidos  
Teste Caminho feliz:  
vendedor cadastra produto preenchendo todos os campos   
vendedor cadastra o exato mesmo produto 2 vezes  
Teste Caminho triste:  
vendedor tenta cadastrar produto deixando o sem descrição   
vendedor tenta cadastrar produto sem preço

# **7\) Vendedor modifica e excluir produto**

# sou um vendedor de produtos diversos e desejo excluir um produto que já não tenho mais e editar outro onde o

# preço está errado para que eu possa manter a organização 

Teste Caminho feliz:  
vendedor edita produto sem deixar nenhum campo vazio  
vendedor edita produto colocando uma descrição de um caracter  
Teste Caminho triste:  
vendedor edita produto e esquece o campo título vazio  
vendedor não edita produto e tenta salvar

# **8\) Vendedor atende pedido**

sou um vendedor e desejo receber os pedidos de compras dos meus clientes para que possa atendê-los o mais rápido possível   
Teste Caminho feliz:vendedor atualiza um pedido pendente  
Teste Caminho triste:  
vendedor tenta atualizar um pedido com status cancelado  
vendedor tenta atualizar um pedido com status a caminho

