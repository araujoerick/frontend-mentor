import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Valid email required",
  },
};

// Recebe qual tipo de dado vai validar
const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true; // Se o tipo for false | Verifica se é required ou não
    if (value.length === 0) {
      // Se for = 0, retorna msg de erro
      setError("Valid email required");
      return false;
      // Se types.nome | types[type] existir, então verifica o regex
      // Condição serve para inputs que não necessitam de validação, Ex: nome
      // seria o mesmo que types.cep.regex
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  // Valida enquanto a pessoa estiver digitando, mas só após ocorrer um erro
  // Para que o erro não permaneça na tela quando já tiver sido sanado
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error, // Expor erro para ter acesso a ele sempre
    onChange, // Expondo função para poder utilizar mais tarde
    onBlur: () => validate(value), // Faz a validação ao tirar o foco do input
    validate: () => validate(value), // Faz a validação no submit
  };
};

export default useForm;
