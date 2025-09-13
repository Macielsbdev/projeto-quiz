import questoes from "../bancoDeQuestoes";
import { NextApiRequest, NextApiResponse } from "next";
import QuestaoModel from "../../../../model/questao";
import RespostaModel from "../../../../model/resposta";

function embaralharRespostas(respostas: RespostaModel[]): RespostaModel[] {
  const embaralhado = [...respostas];
  for (let i = embaralhado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [embaralhado[i], embaralhado[j]] = [embaralhado[j], embaralhado[i]];
  }
  return embaralhado;
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const idSelecionado = Array.isArray(req.query.id)
    ? Number(req.query.id[0])
    : Number(req.query.id);

  if (isNaN(idSelecionado)) {
    return res.status(400).json({ erro: "ID Inválido" });
  }

  const unicaQuestaoOuNada = questoes.find((questao) => questao.id === idSelecionado);

  if (unicaQuestaoOuNada) {
    const questaoSelecionada = new QuestaoModel(
      unicaQuestaoOuNada.id,
      unicaQuestaoOuNada.enunciado,
      embaralharRespostas(unicaQuestaoOuNada.respostas)
    );
    res.status(200).json(questaoSelecionada.paraObjeto());
  } else {
    res.status(404).json({
      error: `Questão com ID ${idSelecionado} não encontrada`
    });
  }
}

export default handler;