import React from 'react';
import { classNames } from 'primereact/utils';

interface TituloProps {
  texto: string;
  negrito?: boolean;
  italico?: boolean;
  tamanho?: string;
}

const Title: React.FC<TituloProps> = ({ texto, negrito, italico, tamanho }) => {
  const titleClasses = classNames({
    'bold': negrito,
    'italic': italico,
    [`${tamanho}`]: tamanho // Pode ser usado tamanho personalizado, por exemplo, 'h1', 'h2', 'h3', etc.
  });

  return (
    <div className={titleClasses}>
      {texto}
    </div>
  );
}

export default Title;
