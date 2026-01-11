// 1. DADOS DAS QUESTÕES (Renderiza primeiro para não travar a tela)
const questions = [
    {
        q: "1️⃣ Engenharia Social por Voz: Você recebe uma ligação no telefone institucional. A pessoa se identifica como seu gestor imediato, utiliza termos internos corretos e demonstra urgência: 'Estou em reunião externa e meu acesso ao sistema foi bloqueado. Um código chegou no seu SMS porque você está como responsável substituto. Preciso desse código agora para liberar um processo.' Como você procede?",
        options: [
            "Informo o código, pois o pedido envolve um processo real e o contato parece legítimo.",
            "Solicito que o gestor confirme a solicitação por mensagem no e-mail institucional.",
            "Encerro a ligação e retorno utilizando o ramal interno ou canal corporativo registrado.",
            "Informo apenas parte do código para confirmar a identidade."
        ],
        correct: 2,
        analysis: "Análise de Segurança do Cenário: As opções 1, 2 e 4 representam engenharia social por voz (vishing). Mesmo canais institucionais podem ser comprometidos. A única medida segura é quebrar o canal inicial e validar por contato previamente registrado."
    },
    {
        q: "2️⃣ Uso de IA com Dados Reais: Para agilizar um relatório, você insere em uma IA gratuita dados reais de alunos/colaboradores, utilizando modo anônimo, VPN ativa e instruções explícitas para não armazenamento. Essa prática é segura?",
        options: [
            "Sim, pois medidas técnicas adicionais reduzem o risco.",
            "Sim, desde que não haja identificação direta como CPF ou matrícula.",
            "Não, pois houve transferência de dados para ambiente externo à instituição.",
            "Sim, se os dados forem usados apenas para formatação."
        ],
        correct: 2,
        analysis: "Análise de Segurança do Cenário: As opções 1, 2 e 4 são erros comuns de interpretação técnica da LGPD. O simples envio de dados pessoais para terceiros já caracteriza risco jurídico e de segurança, independentemente de anonimato parcial ou intenção."
    },
    {
        q: "3️⃣ Alteração de PIX: Um fornecedor envia e-mail informando alteração da chave PIX, com nota fiscal válida, CNPJ correto e histórico de conversas preservado. Qual ação é mais segura?",
        options: [
            "Validar apenas o CNPJ e efetuar o pagamento.",
            "Responder o e-mail solicitando confirmação formal.",
            "Confirmar a alteração por telefone usando contato já cadastrado no sistema.",
            "Solicitar autorização do gestor antes de pagar."
        ],
        correct: 2,
        analysis: "Análise de Segurança do Cenário: As opções 1, 2 e 4 ainda mantêm o contato no canal possivelmente comprometido. Este cenário caracteriza Business Email Compromise (BEC) avançado."
    },
    {
        q: "4️⃣ Acesso Físico: Um técnico uniformizado informa que precisa verificar o modem. Ele apresenta crachá, conhece o layout do setor e cita um chamado antigo. Como você age?",
        options: [
            "Permite o acesso, pois há indícios de legitimidade.",
            "Confirma a visita com a TI antes de autorizar qualquer intervenção.",
            "Acompanha o técnico durante todo o procedimento.",
            "Solicita documentação e libera o acesso."
        ],
        correct: 1,
        analysis: "Análise de Segurança do Cenário: As opções 1, 3 e 4 ignoram riscos de invasão física planejada. A validação formal com a TI é obrigatória, independentemente da aparência de legitimidade."
    },
    {
        q: "5️⃣ Pendrive Encontrado: Você encontra um pendrive USB no setor administrativo, identificado como 'Folha de Pagamento – Confidencial'. Qual atitude apresenta menor risco?",
        options: [
            "Conectar o pendrive ao computador para identificar o proprietário.",
            "Conectar em um computador isolado da rede apenas para ver o conteúdo.",
            "Entregar o pendrive diretamente ao setor de TI sem conectá-lo a nenhum equipamento.",
            "Guardar o pendrive para devolução posterior."
        ],
        correct: 2,
        analysis: "Análise de Segurança do Cenário: As opções 1 e 2 são erros técnicos graves. Pendrives maliciosos (BadUSB) executam comandos automaticamente, mesmo sem abrir arquivos. Não conectar o dispositivo é a única conduta segura."
    },
    {
        q: "6️⃣ Extensão de Navegador: Uma extensão gratuita para PDF solicita permissão para 'ler e alterar dados em todos os sites', alegando necessidade para funcionamento. Qual o principal risco?",
        options: [
            "Acesso aos arquivos PDF apenas.",
            "Captura de cookies de sessão e acessos a sistemas institucionais.",
            "Lentidão no navegador.",
            "Exposição apenas do histórico de navegação."
        ],
        correct: 1,
        analysis: "Análise de Segurança do Cenário: Essa permissão permite sequestro de sessão (session hijacking), possibilitando acesso a sistemas sem necessidade de senha."
    },
    {
        q: "7️⃣ Engenharia Social: Um aluno solicita por telefone a confirmação de dados, alegando urgência e prejuízo acadêmico. Qual atitude é correta?",
        options: [
            "Confirmar apenas informações genéricas.",
            "Validar identidade com perguntas básicas.",
            "Orientar o canal oficial de atendimento, sem confirmar dados.",
            "Solicitar comprovação por e-mail."
        ],
        correct: 2,
        analysis: "Análise de Segurança do Cenário: Mesmo confirmações parciais podem caracterizar vazamento de dados pessoais."
    },
    {
        q: "8️⃣ Phishing com HTTPS: Você recebe link para troca de senha em site idêntico ao oficial, com HTTPS válido. O que isso indica?",
        options: [
            "O site é seguro.",
            "A comunicação é criptografada, mas o site pode ser falso.",
            "A TI validou o link.",
            "Não há risco se o layout for idêntico."
        ],
        correct: 1,
        analysis: "Análise de Segurança do Cenário: HTTPS garante criptografia, não legitimidade."
    },
    {
        q: "9️⃣ Senhas no Navegador: Senhas administrativas são salvas no navegador. Qual ameaça é mais relevante?",
        options: [
            "Acesso físico de terceiros.",
            "Malware do tipo infostealer.",
            "Perda de cache.",
            "Falha de sincronização."
        ],
        correct: 1,
        analysis: "Análise de Segurança do Cenário: Infostealers são projetados especificamente para extrair credenciais salvas localmente."
    },
    {
        q: "🔟 QR Code Malicioso: Um QR Code administrativo solicita permissão para notificações no celular. Qual risco está associado?",
        options: [
            "Spam visual.",
            "Interceptação de códigos de autenticação exibidos em notificações.",
            "Lentidão do dispositivo.",
            "Nenhum risco relevante."
        ],
        correct: 1,
        analysis: "Análise de Segurança do Cenário: A permissão pode permitir captura indireta de códigos 2FA, comprometendo contas."
    }
];

// 2. RENDERIZAÇÃO DAS PERGUNTAS (Executa assim que o script carrega)
const container = document.getElementById('questions-container');
if (container) {
    questions.forEach((item, index) => {
        const qDiv = document.createElement('div');
        qDiv.className = "question-block";
        qDiv.innerHTML = `
            <span class="question-text">${item.q}</span>
            <div class="options-group">
                ${item.options.map((opt, i) => `
                    <label class="option-label" id="label-q${index}-opt${i}">
                        <input type="radio" name="q${index}" value="${i}" required>
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
            <div id="feedback-${index}" class="trap-feedback">
                <p id="eval-${index}" class="font-bold mb-2"></p>
                <p class="text-slate-400" style="font-size: 0.9rem;">${item.analysis}</p>
            </div>
        `;
        container.appendChild(qDiv);
    });
}

// 3. BARRA DE PROGRESSO
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + "%";
});

// 4. CONFIGURAÇÃO DO SUPABASE
// Certifique-se de colocar as suas chaves reais aqui ou deixar como string vazia ""
const SB_URL = "https://csukybsuavifpmbyaded.supabase.co"; 
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdWt5YnN1YXZpZnBtYnlhZGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwODYwMDksImV4cCI6MjA4MzY2MjAwOX0.2CmjaWfse4fetYBUl824vdcEqSlt8yIvBg61z4Urpqs";
let _supabase = null;

try {
    if (SB_URL && SB_URL !== "SUA_URL_AQUI") {
        _supabase = supabase.createClient(SB_URL, SB_KEY);
    }
} catch (e) {
    console.error("Erro ao conectar no Supabase:", e);
}

// 5. LÓGICA DE SUBMISSÃO
const form = document.getElementById('cyberQuiz');
let deviceId = localStorage.getItem('senai_id_v2026') || 'DEV-' + Math.random().toString(36).substr(2, 7).toUpperCase();
localStorage.setItem('senai_id_v2026', deviceId);

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let score = 0;
    let errorsList = [];
    const formData = new FormData(form);
    const submitBtn = document.getElementById('btn-submit');

    submitBtn.innerText = "Processando...";
    submitBtn.disabled = true;

    questions.forEach((item, index) => {
        const answer = formData.get(`q${index}`);
        const feedbackDiv = document.getElementById(`feedback-${index}`);
        const evalP = document.getElementById(`eval-${index}`);
        const selectedLabel = document.getElementById(`label-q${index}-opt${answer}`);
        const correctLabel = document.getElementById(`label-q${index}-opt${item.correct}`);
        
        const isCorrect = parseInt(answer) === item.correct;
        
        if (isCorrect) {
            score++;
            evalP.innerHTML = "✅ Resposta correta";
            evalP.style.color = "var(--success)";
            if (selectedLabel) selectedLabel.style.borderColor = "var(--success)";
        } else {
            errorsList.push(`Q${index + 1}`);
            evalP.innerHTML = "❌ Resposta incorreta";
            evalP.style.color = "var(--error)";
            if (selectedLabel) selectedLabel.style.borderColor = "var(--error)";
            if (correctLabel) {
                correctLabel.style.borderColor = "var(--success)";
                correctLabel.style.borderStyle = "dashed";
            }
        }
        feedbackDiv.style.display = 'block'; 
    });

    // Tenta enviar para o Supabase (se estiver configurado)
    if (_supabase) {
        try {
            await _supabase.from('quiz_logs').insert([
                { device_id: deviceId, score: score, errors: errorsList.join(", ") || "Nenhum" }
            ]);
        } catch (err) {
            console.error("Falha ao salvar no banco:", err);
        }
    }

    document.getElementById('result-summary').classList.remove('hidden');
    document.getElementById('score-text').innerText = `${score} / ${questions.length}`;
    submitBtn.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
});