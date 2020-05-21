import React , { useState } from "react"

import '../i18n'
import { useTranslation } from 'react-i18next'

import { Navbar, Button } from 'react-bootstrap'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation()
  
  const [values, setValues] = useState({
    language: 'zh-TW',
    variant: "outline-info"
  });

  function handleChange(event) {
    let lan = values.language == "en" ? "zh-TW" : "en";
    let vari = values.language == "en" ? "outline-info" : "info";
    i18n.changeLanguage(lan);
    setValues(oldValues => ({
      ...oldValues,
      language: lan,
      variant: vari
    }));
  }

  return(
    <Navbar.Brand>
      <Button
        size="sm"
        className="i18n-button"
        variant= {values.variant}
        onClick={(e) => handleChange(e)}
      ><FontAwesomeIcon icon={faGlobe} /></Button>
    </Navbar.Brand>
  )
}

export default LanguageMenu