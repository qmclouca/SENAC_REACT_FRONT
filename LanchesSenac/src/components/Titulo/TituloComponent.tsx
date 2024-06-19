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
    [`${tamanho}`]: tamanho
  });

  return (
    <div className={titleClasses}>
      {texto}
    </div>
  );
}

export default Title;
