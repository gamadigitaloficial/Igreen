(function(){
const desc='Este diagnóstico tem como objetivo entender a operação da empresa, identificar processos repetitivos, manuais, demorados ou custosos e mapear oportunidades reais de automação com Inteligência Artificial. O foco é encontrar atividades que possam ser executadas com mais velocidade, menos retrabalho e maior capacidade de escala. Tempo estimado: 8–12 minutos.';
const conf='Obrigado! Vamos analisar suas respostas para identificar os processos com maior potencial de automação, impacto financeiro e ganho de produtividade. Entraremos em contato caso identifiquemos oportunidades relevantes para sua operação.';
function setup(f){f.setDescription(desc);f.setCollectEmail(false);f.setLimitOneResponsePerUser(false);f.setAcceptingResponses(true);f.setProgressBar(true);f.setConfirmationMessage(conf);return f}
function sec(f,t){f.addPageBreakItem().setTitle(t)}
function head(f,t){f.addSectionHeaderItem().setTitle(t)}
function txt(f,t,r){f.addTextItem().setTitle(t).setRequired(r!==false)}
function par(f,t,r){f.addParagraphTextItem().setTitle(t).setRequired(r!==false)}
function mc(f,t,o,r){f.addMultipleChoiceItem().setTitle(t).setChoiceValues(o).setRequired(r!==false)}
function cb(f,t,o,r){f.addCheckboxItem().setTitle(t).setChoiceValues(o).setRequired(r!==false)}

// FORM 1 — CONTABILIDADES
const c=setup(FormApp.create('Diagnóstico de Eficiência Operacional e Automação com IA — Escritórios de Contabilidade'));
head(c,'SEÇÃO 1 — Perfil do escritório');
txt(c,'Nome do escritório');txt(c,'Nome do responsável pelo diagnóstico');txt(c,'Cargo/função');txt(c,'WhatsApp');txt(c,'E-mail');
mc(c,'Quantos clientes ativos o escritório possui?',['Até 50','51–100','101–250','251–500','501–1.000','Mais de 1.000']);
mc(c,'Quantas pessoas trabalham atualmente no escritório?',['1–5','6–10','11–20','21–50','51–100','Mais de 100']);
cb(c,'Em quais áreas o escritório possui equipe dedicada?',['Fiscal','Contábil','Departamento Pessoal','Financeiro/BPO','Atendimento','Comercial','Administrativo','Tecnologia/Automação','Outro']);
sec(c,'SEÇÃO 2 — Sistemas e integrações');
cb(c,'Quais sistemas e ferramentas vocês utilizam hoje?',['Domínio','Alterdata','Questor','SCI','Contmatic','Omie','Conta Azul','Nibo','Excel/Google Sheets','WhatsApp','ERP próprio','Power BI','Outro']);
mc(c,'Existem sistemas que não conversam entre si e exigem copiar, conferir ou lançar informações manualmente?',['Sim, frequentemente','Às vezes','Raramente','Não']);
par(c,'Descreva os principais exemplos de retrabalho entre sistemas.',false);
cb(c,'Como os clientes normalmente enviam documentos e informações ao escritório?',['WhatsApp','E-mail','Portal do cliente','Google Drive/OneDrive','Sistema contábil','Físico/papel','Outro']);
sec(c,'SEÇÃO 3 — Gargalos operacionais');
cb(c,'Em quais atividades sua equipe mais gasta tempo atualmente?',['Receber/cobrar documentos','Organizar documentos','Lançamentos contábeis','Lançamentos fiscais','Conciliação bancária','Classificação contábil','Conferência de notas','Análise fiscal/apuração','Folha/admissões/rescisões','Atendimento/WhatsApp','Buscar informações em portais','Digitar informações entre sistemas','BPO financeiro','Contas a pagar/receber','Cobrança','Relatórios','Outro']);
par(c,'Quais atividades são consideradas mais repetitivas ou desgastantes pela equipe?');
mc(c,'Há processos em que alguém recebe informação de PDF, Excel, e-mail, WhatsApp, XML, nota fiscal, portal ou sistema e precisa redigitar/lançar em outro lugar?',['Sim, muitos','Sim, alguns','Poucos','Não']);
par(c,'Descreva os 3 principais processos de copiar, conferir ou transferir informações manualmente.');
mc(c,'Aproximadamente quantos documentos fiscais/financeiros o escritório processa por mês?',['Menos de 1.000','1.000–5.000','5.001–20.000','20.001–50.000','Mais de 50.000','Não sabemos']);
mc(c,'Quanto tempo você estima que a equipe gasta por mês em tarefas puramente operacionais/repetitivas?',['Menos de 50 horas','50–100 horas','101–300 horas','301–500 horas','Mais de 500 horas','Não sabemos']);
par(c,'Existe alguma atividade que exige uma pessoa apenas para conferir se outra pessoa fez corretamente? Qual?');
mc(c,'Existe algum processo que atrasa porque a equipe não consegue dar conta do volume?',['Frequentemente','Às vezes','Raramente','Nunca']);
sec(c,'SEÇÃO 4 — BPO financeiro');
mc(c,'O escritório oferece BPO financeiro aos clientes?',['Sim','Não','Estamos estruturando','Temos interesse']);
txt(c,'Se oferece BPO, quantos clientes possui atualmente?',false);txt(c,'Quantos clientes aproximadamente cada operador consegue atender hoje?',false);
cb(c,'Quais processos do BPO são executados pelo escritório?',['Contas a pagar','Contas a receber','Conciliação bancária','Cobrança','Emissão de notas','Fluxo de caixa','DRE/relatórios','Gestão de documentos','Outro'],false);
par(c,'No BPO, quais tarefas ainda dependem fortemente de trabalho manual?',false);
sec(c,'SEÇÃO 5 — Fiscal, contábil e tributário');
mc(c,'Existem tarefas fiscais que exigem análise manual de grandes volumes de notas, XMLs ou produtos?',['Frequentemente','Às vezes','Raramente','Não']);
mc(c,'O escritório realiza revisão tributária ou recuperação de créditos?',['Sim, internamente','Sim, por meio de parceiro','Não','Temos interesse']);
mc(c,'Existem clientes em que vocês suspeitam haver inconsistências ou oportunidades tributárias, mas não possuem tempo/equipe para revisar?',['Muitos','Alguns','Poucos','Nenhum']);
par(c,'Quais tarefas do fiscal/contábil você mais gostaria de automatizar?');
sec(c,'SEÇÃO 6 — Potencial de automação e prioridade');
par(c,'Se você pudesse eliminar amanhã 3 tarefas operacionais do escritório, quais seriam?');par(c,'Qual tarefa seus funcionários mais reclamam de executar?');par(c,'Qual processo você considera lento demais hoje?');
par(c,'Existe algum processo em que, conforme o número de clientes cresce, vocês precisam contratar mais pessoas quase na mesma proporção? Descreva.');
mc(c,'Existe alguma atividade operacional que você acredita representar mais de R$ 5.000/mês em custo de mão de obra?',['Sim','Provavelmente','Não','Não sei']);
mc(c,'Se fosse possível reduzir em 50–80% o trabalho operacional de uma área, qual geraria maior impacto?',['Fiscal','Contábil','Departamento Pessoal','Financeiro/BPO','Atendimento','Comercial','Administrativo','Outro']);
mc(c,'A empresa já utiliza Inteligência Artificial?',['Sim, bastante','Alguns colaboradores utilizam','Estamos testando','Praticamente não utilizamos','Não utilizamos']);
mc(c,'A empresa já possui automações de processos?',['Muitas','Algumas','Poucas','Nenhuma']);
cb(c,'O que mais dificulta automatizar processos hoje?',['Não sabemos por onde começar','Sistemas não possuem integração','Falta equipe técnica','Custo','Segurança','Resistência da equipe','Processos não estão padronizados','Falta tempo','Não confiamos totalmente em IA','Já tentamos e não funcionou','Outro']);
cb(c,'Qual seria o principal objetivo de usar automação/IA?',['Reduzir custos','Aumentar produtividade','Evitar novas contratações','Crescer sem aumentar equipe','Reduzir erros','Melhorar velocidade','Melhorar atendimento','Gerar mais receita','Ter mais controle','Reduzir retrabalho']);
mc(c,'Se identificarmos um processo com potencial real de reduzir significativamente custos ou tempo, existe interesse em realizar um projeto piloto?',['Sim','Talvez, dependendo do ROI','Estamos apenas pesquisando','Não no momento']);
par(c,'Existe algum processo dentro do escritório em que você já pensou: “não faz sentido ainda precisarmos de uma pessoa fazendo isso manualmente”? Descreva.');

// FORM 2 — INDÚSTRIAS
const i=setup(FormApp.create('Diagnóstico de Eficiência Operacional e Automação com IA — Indústrias'));
head(i,'SEÇÃO 1 — Perfil da indústria');
txt(i,'Nome da empresa');txt(i,'Nome do responsável pelo diagnóstico');txt(i,'Cargo/função');txt(i,'WhatsApp');txt(i,'E-mail');txt(i,'Qual é o principal segmento industrial da empresa?');
mc(i,'Quantos funcionários a empresa possui?',['Até 20','21–50','51–100','101–250','251–500','Mais de 500']);
mc(i,'Qual é o faturamento mensal aproximado?',['Até R$ 500 mil','R$ 500 mil–R$ 2 milhões','R$ 2–10 milhões','R$ 10–50 milhões','Acima de R$ 50 milhões','Prefiro não informar']);
mc(i,'Quantas unidades, plantas ou filiais a empresa possui?',['1','2–3','4–10','Mais de 10']);
sec(i,'SEÇÃO 2 — Sistemas, dados e integrações');
cb(i,'Quais sistemas e ferramentas são usados hoje?',['SAP','TOTVS/Protheus','Senior','Sankhya','Omie','ERP próprio','Excel/Google Sheets','Power BI','WhatsApp','E-mail','Outro']);
mc(i,'Existem sistemas que não conversam entre si e exigem copiar, conferir ou lançar informações manualmente?',['Sim, frequentemente','Às vezes','Raramente','Não']);
par(i,'Descreva os principais exemplos de retrabalho entre sistemas.',false);
cb(i,'Por quais canais os dados/documentos operacionais chegam à equipe?',['E-mail','WhatsApp','PDF','XML/NF-e','Excel/planilhas','Portal de fornecedor/cliente','ERP','Papel/físico','Outro']);
mc(i,'Existem processos em que informações são copiadas manualmente de um documento, planilha ou sistema para outro?',['Sim, muitos','Sim, alguns','Poucos','Não']);
par(i,'Descreva os 3 principais processos de copiar, conferir ou transferir informações manualmente.');
sec(i,'SEÇÃO 3 — Gargalos operacionais');
cb(i,'Quais áreas possuem maior quantidade de trabalho administrativo/operacional repetitivo?',['Financeiro','Fiscal','Contabilidade','Compras','Comercial','Atendimento','Logística','RH','PCP','Qualidade','Manutenção','Engenharia','Almoxarifado','Administrativo','Outro']);
par(i,'Quais tarefas são consideradas mais repetitivas, desgastantes ou propensas a erro?');
mc(i,'Aproximadamente quantas pessoas atuam em funções que lidam com dados, documentos, conferências ou lançamentos?',['1–5','6–10','11–20','21–50','Mais de 50','Não sabemos']);
mc(i,'Quanto tempo você estima que a equipe gasta por mês em tarefas puramente operacionais/repetitivas?',['Menos de 50 horas','50–100 horas','101–300 horas','301–500 horas','Mais de 500 horas','Não sabemos']);
mc(i,'Existem processos que atrasam porque a equipe não consegue dar conta do volume?',['Frequentemente','Às vezes','Raramente','Nunca']);
par(i,'Existe alguma atividade que exige uma pessoa apenas para conferir se outra pessoa fez corretamente? Qual?');
par(i,'Existe algum processo que cresce quase proporcionalmente ao número de pedidos, clientes, notas ou faturamento e exige contratar mais pessoas? Descreva.');
par(i,'Se você pudesse eliminar amanhã 3 tarefas operacionais da empresa, quais seriam?');
sec(i,'SEÇÃO 4 — Compras, financeiro, fiscal, logística e comercial');
mc(i,'Quantas pessoas trabalham diretamente em compras/suprimentos?',['0','1–2','3–5','6–10','Mais de 10']);
mc(i,'Quantas cotações aproximadamente são realizadas por mês?',['Até 50','51–200','201–500','501–1.000','Mais de 1.000','Não sabemos']);
mc(i,'O comprador precisa entrar em contato manualmente com vários fornecedores para cada cotação?',['Sempre','Frequentemente','Às vezes','Raramente','Nunca']);
mc(i,'Existem lançamentos manuais de documentos em contas a pagar/receber?',['Muitos','Alguns','Poucos','Nenhum']);
mc(i,'Como é realizada a conciliação bancária?',['Automaticamente','Parcialmente automatizada','Manual','Terceirizada','Não sabemos']);
mc(i,'Aproximadamente quantas notas fiscais a empresa movimenta por mês?',['Até 500','501–2.000','2.001–10.000','10.001–50.000','Mais de 50.000','Não sabemos']);
mc(i,'Existem funcionários dedicados principalmente à conferência/classificação de documentos fiscais?',['Sim','Não','Não sei']);
cb(i,'Quais atividades logísticas ainda dependem de trabalho manual relevante?',['NF-e','CT-e','MDF-e','Comprovantes de entrega','Rastreamento','Agendamentos','Ocorrências','Comunicação com transportadoras','Auditoria de fretes','Atualização de clientes','Nenhuma','Outro']);
cb(i,'Quais tarefas comerciais ainda são muito manuais?',['Atualizar CRM','Gerar propostas/orçamentos','Consultar estoque','Consultar preços','Follow-up','Responder perguntas repetitivas','Digitar pedidos','Montar relatórios','Nenhuma','Outro']);
sec(i,'SEÇÃO 5 — IA e automação atuais');
mc(i,'A empresa já utiliza Inteligência Artificial?',['Sim, bastante','Alguns colaboradores utilizam','Estamos testando','Praticamente não utilizamos','Não utilizamos']);
mc(i,'A empresa já possui automações de processos?',['Muitas','Algumas','Poucas','Nenhuma']);
par(i,'Quais ferramentas de automação/IA já utilizam?',false);
cb(i,'O que mais dificulta automatizar processos hoje?',['Não sabemos por onde começar','Sistemas não possuem integração','Falta equipe técnica','Custo','Segurança','Resistência da equipe','Processos não estão padronizados','Falta tempo','Não confiamos totalmente em IA','Já tentamos e não funcionou','Outro']);
cb(i,'Qual seria o principal objetivo de usar automação/IA?',['Reduzir custos','Aumentar produtividade','Evitar novas contratações','Crescer sem aumentar equipe','Reduzir erros','Melhorar velocidade','Melhorar atendimento','Gerar mais receita','Ter mais controle','Reduzir retrabalho']);
mc(i,'Se identificarmos um processo com potencial real de reduzir significativamente custos ou tempo, existe interesse em realizar um projeto piloto?',['Sim','Talvez, dependendo do ROI','Estamos apenas pesquisando','Não no momento']);
sec(i,'SEÇÃO 6 — Potencial de automação e prioridade');
mc(i,'Se fosse possível reduzir em 50–80% o trabalho operacional de uma área, qual geraria maior impacto?',['Financeiro','Fiscal','Compras','Comercial','Atendimento','Logística','RH','PCP','Qualidade','Manutenção','Administrativo','Outro']);
mc(i,'Existe alguma atividade operacional que você acredita representar mais de R$ 5.000/mês em custo de mão de obra?',['Sim','Provavelmente','Não','Não sei']);
par(i,'Qual processo você considera lento demais hoje?');par(i,'Qual tarefa os funcionários mais reclamam de executar?');
par(i,'Existe algum processo dentro da empresa em que você já pensou: “não faz sentido ainda precisarmos de uma pessoa fazendo isso manualmente”? Descreva.');

Logger.log('CONTABILIDADE_EDIT='+c.getEditUrl());
Logger.log('CONTABILIDADE_PUBLICO='+c.getPublishedUrl());
Logger.log('INDUSTRIA_EDIT='+i.getEditUrl());
Logger.log('INDUSTRIA_PUBLICO='+i.getPublishedUrl());
})();