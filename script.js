// 1. DADOS DAS QUESTÕES - ADAPTADAS AO GUIA DE RESILIÊNCIA 2026
const questions = [
    {
        q: "1️⃣ Cadastro Mestre (Master Data): Você percebe que um código de produto crítico está com a descrição errada no sistema, o que pode parar a linha de produção. Qual a atitude correta segundo o guia?",
        options: [
            "Corrigir imediatamente, pois a agilidade é prioridade.",
            "Criar uma planilha paralela com o dado correto e avisar a equipe por e-mail.",
            "Consultar o procedimento oficial e, se necessário, solicitar dupla verificação antes de alterar.",
            "Ignorar, pois é responsabilidade exclusiva da TI."
        ],
        correct: 2, // Índice da resposta certa (0, 1, 2, 3)
        analysis: "Resiliência Operacional: Dados mestres são a 'fonte da verdade'. Alterações sem procedimento geram erros em cadeia. A regra é: na dúvida, consulte e valide."
    },
    {
        q: "2️⃣ Shadow IT (A Armadilha do Atalho): O sistema oficial está lento. Para entregar o relatório no prazo, você decide usar uma ferramenta online gratuita de conversão de arquivos que não é homologada. Qual o risco?",
        options: [
            "Nenhum, se a ferramenta for famosa.",
            "Você cria um Ponto Único de Falha e expõe dados da empresa sem contrato de confidencialidade.",
            "O risco é baixo se você apagar o arquivo depois.",
            "É uma atitude proativa que demonstra eficiência."
        ],
        correct: 1,
        analysis: "Segurança: Ferramentas não oficiais (Shadow IT) não têm garantia de segurança, backup ou suporte. Se a ferramenta vazar os dados, a responsabilidade é sua."
    },
    {
        q: "3️⃣ Golpe da Fatura (BEC 4.0): Um fornecedor antigo envia um e-mail com o logotipo correto informando que o boleto vence hoje, mas houve um erro no banco e ele precisa que o pagamento seja feito via um novo PIX urgente. O que fazer?",
        options: [
            "Pagar imediatamente para evitar juros e multas.",
            "Responder o e-mail perguntando se é verdade.",
            "Interromper o pagamento e confirmar por telefone oficial (não o do e-mail) com o fornecedor.",
            "Verificar se o logotipo do e-mail é idêntico ao original e pagar."
        ],
        correct: 2,
        analysis: "Ameaça Externa: E-mails de parceiros podem ser invadidos. A urgência e a troca de canal de pagamento são os maiores sinais de fraude (BEC)."
    },
    {
        q: "4️⃣ Uso de IA (Shadow AI): Você precisa resumir um contrato confidencial de parceria estratégica. Qual a forma segura de usar IAs públicas (como ChatGPT)?",
        options: [
            "Colar o texto inteiro, pois a IA ajuda na produtividade.",
            "Colar apenas as cláusulas financeiras.",
            "Anonimizar os dados (remover nomes, valores e empresas) antes de inserir, ou não usar.",
            "Usar o modo anônimo do navegador."
        ],
        correct: 2,
        analysis: "Proteção de Dados: IAs públicas aprendem com o que você digita. Dados confidenciais inseridos lá podem vazar para concorrentes via 'engenharia de prompts'."
    },
    {
        q: "5️⃣ Engenharia Social Física (BadUSB): Um visitante simpático pede para carregar o celular na porta USB do seu computador corporativo enquanto aguarda uma reunião. Como proceder?",
        options: [
            "Permitir, é uma gentileza básica e não há transferência de arquivos.",
            "Emprestar seu carregador de parede, mas negar a conexão no PC (Política USB Zero).",
            "Permitir apenas se ele desbloquear o celular na sua frente.",
            "Conectar, mas ficar de olho na tela."
        ],
        correct: 1,
        analysis: "Defesa Física: Cabos e dispositivos podem conter chips maliciosos (BadUSB) que instalam vírus ou assumem controle do PC em segundos. Nunca conecte dispositivos desconhecidos."
    },
    {
        q: "6️⃣ Quishing (QR Code): Chega uma encomenda com um QR Code na etiqueta dizendo 'Escaneie para rastrear a entrega em tempo real'. Ao escanear, pede login do seu e-mail corporativo.",
        options: [
            "Logar rapidamente para ver onde está a carga.",
            "Verificar se o site tem o cadeado (HTTPS) e logar.",
            "Não logar. QR Codes podem levar a sites falsos que roubam a sessão ativa (Token).",
            "Usar o celular pessoal para logar na conta da empresa."
        ],
        correct: 2,
        analysis: "Ameaça Moderna: O Quishing leva a sites falsos que roubam credenciais e cookies de sessão, burlando até a autenticação de dois fatores."
    },
    {
        q: "7️⃣ Notificação de Sistema (Omissão): Aparece um alerta no seu PC: 'Licença de software expira em 2 dias'. Você não é da TI. O que faz?",
        options: [
            "Fecha a janela e continua trabalhando.",
            "Espera expirar para ver se para de funcionar.",
            "Reporta proativamente à TI via chamado ou e-mail.",
            "Tenta procurar um 'crack' na internet para resolver."
        ],
        correct: 2,
        analysis: "Cultura do Reporte: Ignorar alertas leva a paradas operacionais. Você é o sensor da empresa; reportar evita falhas catastróficas."
    },
    {
        q: "8️⃣ Compartilhamento de Senha: Um colega do seu time precisa urgente enviar um arquivo, mas o computador dele travou. Ele pede sua senha para logar rápido na sua máquina e enviar. Você:",
        options: [
            "Passa a senha, pois o trabalho em equipe é prioridade.",
            "Digita a senha para ele, mas não conta qual é.",
            "Nega. Credenciais são intransferíveis (Princípio do Não-Repúdio).",
            "Empresta, mas troca a senha no dia seguinte."
        ],
        correct: 2,
        analysis: "Identidade: Sua senha é sua assinatura jurídica. Se o colega cometer um erro ou fraude usando sua conta, o sistema registrará que foi VOCÊ."
    },
    {
        q: "9️⃣ Arquivo Executável: Chega um currículo por e-mail com o nome 'Curriculo_Analista_2026.pdf.exe'. O ícone parece um PDF.",
        options: [
            "Abre para conferir o candidato.",
            "Renomeia para tirar o .exe e abre.",
            "Deleta imediatamente e reporta. Extensão dupla é sinal claro de vírus.",
            "Encaminha para o RH avaliar."
        ],
        correct: 2,
        analysis: "Ransomware: Arquivos .exe, .scr, .bat são programas, não documentos. Abrir isso pode criptografar toda a rede da empresa."
    },
    {
        q: "🔟 Deepfake (Autoridade Artificial): Você recebe um áudio no WhatsApp do Diretor pedindo uma transferência urgente para um fornecedor novo. A voz é idêntica.",
        options: [
            "Faz a transferência pela urgência do cargo.",
            "Desconfia, mas faz um valor menor para testar.",
            "Tenta ligar de volta para o número oficial ou valida com outro gestor. A voz pode ser clonada por IA.",
            "Manda uma mensagem de texto perguntando 'é você mesmo?'."
        ],
        correct: 2,
        analysis: "Futuro 2026: A autoridade não é apenas a voz, é o processo. Nenhuma urgência justifica quebrar processos de segurança financeira. Valide a origem."
    }
];

// 2. RENDERIZAÇÃO DAS PERGUNTAS
const container = document.getElementById('questions-container');
if (container) {
    questions.forEach((item, index) => {
        const qDiv = document.createElement('div');
        qDiv.className = "question-block";
        qDiv.innerHTML = `
            <div class="q-header">
                <span class="q-number">Questão ${index + 1}</span>
                <span class="q-text">${item.q}</span>
            </div>
            <div class="options-group">
                ${item.options.map((opt, i) => `
                    <label class="option-label" id="label-q${index}-opt${i}">
                        <input type="radio" name="q${index}" value="${i}" required>
                        <span class="opt-text">${opt}</span>
                    </label>
                `).join('')}
            </div>
            <div id="feedback-${index}" class="trap-feedback" style="display:none;">
                <p id="eval-${index}" class="eval-text"></p>
                <p class="analysis-text"><strong>Análise:</strong> ${item.analysis}</p>
            </div>
        `;
        container.appendChild(qDiv);
    });
}

// 3. LÓGICA DE SUBMISSÃO
const form = document.getElementById('cyberQuiz');
if(form){
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let score = 0;
        const submitBtn = document.getElementById('btn-submit');
        submitBtn.disabled = true;
        submitBtn.innerText = "Calculando...";

        questions.forEach((item, index) => {
            const formData = new FormData(form);
            const answer = formData.get(`q${index}`);
            const feedbackDiv = document.getElementById(`feedback-${index}`);
            const evalP = document.getElementById(`eval-${index}`);
            const selectedLabel = document.getElementById(`label-q${index}-opt${answer}`);
            const correctLabel = document.getElementById(`label-q${index}-opt${item.correct}`);
            
            // Lógica de Correção
            if (parseInt(answer) === item.correct) {
                score++;
                evalP.innerHTML = "✅ Resposta Correta!";
                evalP.className = "eval-text success";
                if (selectedLabel) selectedLabel.classList.add('correct-choice');
            } else {
                evalP.innerHTML = "❌ Resposta Incorreta";
                evalP.className = "eval-text error";
                if (selectedLabel) selectedLabel.classList.add('wrong-choice');
                if (correctLabel) correctLabel.classList.add('correct-choice-highlight');
            }
            feedbackDiv.style.display = 'block'; 
        });

        // Mostra Resultado
        const resultSummary = document.getElementById('result-summary');
        const scoreText = document.getElementById('score-text');
        const msgFinal = document.getElementById('msg-final');
        
        resultSummary.style.display = 'block';
        scoreText.innerText = `${score} / ${questions.length}`;
        
        if(score >= 8) msgFinal.innerText = "Excelente! Você é um pilar de resiliência.";
        else if(score >= 5) msgFinal.innerText = "Bom, mas fique atento aos detalhes.";
        else msgFinal.innerText = "Atenção! Revise o guia para proteger sua carreira.";

        submitBtn.style.display = 'none';
        
        // Rola para o topo do resultado
        resultSummary.scrollIntoView({ behavior: 'smooth' });
    });
}