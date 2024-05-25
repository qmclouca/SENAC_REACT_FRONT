import React from 'react';

interface LinkProps {
  texto: string;
  whereToGo: string;
  cor?: string;
  tamanho?: number;
}

const Link: React.FC<LinkProps> = ({ texto, whereToGo, cor, tamanho }) => {
    const linkStyle: React.CSSProperties = {
        color: cor || 'blue',
        fontSize: tamanho
      }
  return (
    <a href={whereToGo} style={linkStyle}> {texto} </a>
  );
}

export default Link;
