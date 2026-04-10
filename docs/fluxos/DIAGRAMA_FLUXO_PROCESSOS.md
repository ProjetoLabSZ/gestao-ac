# Diagrama de Fluxo de Processos

Representação visual do ciclo de vida de um Processo (Requerimento de Validação de Atividades Complementares).

**Arquitetura:**

- Aluno é externo (envia email com certificados) - não faz login
- Sistema tem 3 atores com login: Admin, Secretaria, Coordenador
- Secretaria cria protocolos no sistema (não o aluno)

## Visualização: Fluxo Principal

```mermaid
stateDiagram-v2
    [*] --> EmailAluno

    EmailAluno --> CadastroAluno: Aluno envia email<br/>com certificados

    CadastroAluno --> CadastroAluno: Secretaria cadastra aluno<br/>(manual ou CSV turma)<br/>se novo

    CadastroAluno --> CriacaoProtocolo: Secretaria cria<br/>PROTOCOLO no sistema

    CriacaoProtocolo --> CriacaoProtocolo: Secretaria anexa<br/>docs dos emails

    CriacaoProtocolo --> AguardandoVal: Protocolo pronto

    AguardandoVal --> ValidacaoCoord: Coordenador abre<br/>processo

    ValidacaoCoord --> ValidacaoCoord: Coordenador valida<br/>cada atividade

    ValidacaoCoord --> AtividadeRej: Rejeita 1+<br/>atividades

    AtividadeRej --> EmailRej: Secretaria notifica<br/>aluno por email

    ValidacaoCoord --> ValidacaoCom: OK<br/>Todas atividades validadas

    ValidacaoCom --> CalculoRegras: Backend valida<br/>regras ANEXO A

    CalculoRegras --> ErroValidacao: Falha nas<br/>regras

    ErroValidacao --> EmailRej

    CalculoRegras --> StatusIntegralizado: OK<br/>2 modalidades, limites, horas

    StatusIntegralizado --> RegistroHistorico: Secretaria registra<br/>no Histórico Escolar

    RegistroHistorico --> EmailAprovacao: Secretaria notifica<br/>AC Integralizada

    EmailAprovacao --> [*]

    EmailRej --> [*]

    note right of EmailAluno
        ALUNO (externo)
        Envia email
        Anexa: Certificados, declarações
        Para: secretaria@senai.br
    end note

    note right of CadastroAluno
        SECRETARIA
        Cadastra aluno se novo
        Referência: Curso/Coordenador
        Via: Manual ou CSV
    end note

    note right of CriacaoProtocolo
        SECRETARIA (no sistema)
        POST /processos
        Anexa docs do email
    end note

    note right of AguardandoVal
        State: AguardandoValidacao
        Protocolo criado
        Aguardando coordenador
    end note

    note right of ValidacaoCoord
        COORDENADOR
        Valida cada atividade
        Rejeita se doc ruim
        Aprova se ok
    end note

    note right of CalculoRegras
        BACKEND (automático)
        Valida regras
        Verifica 2 modalidades?
        Verifica limites anuais/totais?
        Verifica horas >= mínimo?
    end note

    note right of StatusIntegralizado
        State: Integralizado
        TODOS critérios OK
        Aluno pode colar grau
    end note
```

---

## Estados do Processo (State Machine)

| Estado                  | Descrição                           | Ator       | Próximo           | Ações                                          |
| ----------------------- | ----------------------------------- | ---------- | ----------------- | ---------------------------------------------- |
| AguardandoValidacao     | Secretaria criou protocolo com docs | Secretaria | Coordenador       | Secretaria edita atividades/docs se necessário |
| ValidacaoConcluida      | Coordenador finalizou validação     | Backend    | Backend           | Calcula regras automaticamente                 |
| Integralizado           | AC aprovada, horas registradas      | Secretaria | -                 | Registra no histórico escolar depois email     |
| Rejeitado               | Falha em regras ou docs ruins       | Backend    | Aluno (via email) | Aluno reenvia documentos                       |

---

## Responsabilidades por Ator

### Aluno (Externo, sem login)

- Envia email com certificados e documentos para secretaria@senai.br
- Anexos: PDF, JPG de certificados, declarações, comprovantes
- Respeita calendário acadêmico

### Secretaria (Sistema - Operacional)

- Cadastro: INSERT aluno (manual ou CSV da turma) Reference por Curso/Coordenador
- Protocolo: POST /processos {aluno_id}
- Documentação: POST /atividades/{id}/documentacao (anexa links/arquivos dos emails)
- Conferência: Valida se docs estão completas e legíveis
- Notificações: Envia template emails para aluno (rejeição, aprovação)
- Registro Final: PUT /processos/{id}/registrar-historico no Histórico Escolar

### Coordenador (Sistema - Validação)

- Revisão: GET /processos e valida cada atividade conforme ANEXO A
- Aprovação: PUT /atividades/{id}/validar {status: Validada}
- Rejeição: PUT /atividades/{id}/validar {status: Rejeitada, motivo: "..."}
- Parecer: PUT /processos/{id}/validacao-completa (finaliza validação)

### Backend (Automático)

- Cálculo: Valida regras (2 modalidades, limites, horas)
- Status: Auto-atualiza para Integralizado ou Rejeitado
- Events: Publica eventos para listeners (email, auditoria)

**Fluxo:** Email input > Secretaria operador > Coordenador validador > Backend automático > Secretaria registrador > Email output
