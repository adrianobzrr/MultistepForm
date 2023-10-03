import './Thanks.css'
import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill,BsFillEmojiFrownFill, BsFillEmojiNeutralFill} from "react-icons/bs"

const Thanks = () => {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para sua próxima compra.</p>
        <p>Para concluir a sua avaliação, clique no botão de Enviar abaixo.</p>
        <h3>Aqui está o resumo da sua avaliação:</h3>
        <p className="review-data">
          <span>Satisfação com o produto:</span>
        </p>
        <p className="review-data">
          <span>Comentários:</span>
        </p>
    </div>
  )
}

export default Thanks