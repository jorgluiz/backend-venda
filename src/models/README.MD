1. db.execute

# Preparação da consulta: db.execute é geralmente usado para consultas preparadas. Isso significa que a consulta SQL é preparada uma vez e reutilizada várias vezes com diferentes valores de entrada. A preparação é feita no nível do banco de dados, o que pode melhorar a segurança (evitando injeções de SQL) e a performance.

# Segurança: Como a consulta é preparada, os valores passados são escapados automaticamente, o que ajuda a evitar ataques de injeção de SQL.

# Uso típico: É mais comum em INSERT, UPDATE, e DELETE, onde os dados do usuário podem variar. No seu caso, você está utilizando db.execute na função createUser porque os valores de name, email, e password são inseridos dinamicamente.

2. db.query 

# Execução simples de consultas: db.query é mais usado para consultas simples que não precisam de preparação especial, como consultas SELECT. Ele executa a consulta diretamente sem qualquer processo de preparação no banco de dados.

# Menos sobrecarga: Não há processo de preparação ou reutilização, o que pode ser mais rápido em consultas que são executadas uma única vez sem variáveis dinâmicas.

# Uso típico: Frequentemente utilizado em SELECT onde você deseja recuperar dados sem passar muitos parâmetros, como na função getAllUsers no seu exemplo.