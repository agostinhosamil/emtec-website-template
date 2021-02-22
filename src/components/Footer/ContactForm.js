import { useState } from 'react'

import { AskBudgetForm } from '@components/AskBudgetForm'

export const FooterContactForm = ({ askBudget }) => {
  askBudget = typeof askBudget === typeof true ? askBudget : false
  const [ _askBudget, setAskBudget ] = useState (false)
  
  const handleAskBudget = (event) => {
    event.preventDefault()

    setAskBudget(!_askBudget)
  } 

  return (
    <form method="post" action="#">
      <div className="row gtr-50">
        <div className="col-6 col-12-mobile">
          <input name="name" placeholder="Name" type="text" />
        </div>
        <div className="col-6 col-12-mobile">
          <input name="email" placeholder="Email" type="text" />
        </div>
        <div className="col-12">
          { askBudget && !_askBudget && <a href="#" onClick={ handleAskBudget }>Pedir Orçamento</a>}
          { _askBudget && <AskBudgetForm /> }
        </div>
        <div className="col-12">
          <textarea name="message" placeholder="Message"></textarea>
        </div>
        <div className="col-12">
          <ul className="actions">
            <li><input type="submit" value="Enviar Mensagem" /></li>
            <li><input type="reset" value="Limpar formulário" /></li>
          </ul>
        </div>
      </div>
    </form>
  )
}
