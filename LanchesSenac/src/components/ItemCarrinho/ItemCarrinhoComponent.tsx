import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { ItemCarrinhoProps } from "../../interfaces/ItemCarrinhoProps";
import "./ItemCarrinhoComponent.css";
import { classNames } from "primereact/utils";

const ItemCarrinhoComponent: React.FC<ItemCarrinhoProps> = ({ produto, quantidade, subtotal }) => {
  const [qt, setQuantidade] = useState(quantidade);
  const [sb, setSubtotal] = useState(subtotal);

  useEffect(() => {
    setSubtotal(Math.floor(qt * produto.valor * 100) / 100);
  }, [qt, produto.valor]);

  const aumentarQuantidade = () => {
    setQuantidade(qt + 1);
  };

  const diminuirQuantidade = () => {
    if (qt > 1) {
      setQuantidade(qt - 1);
    }
  };

  return (
    <div className="col-12" key={produto.id}>
      <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': 0 })}>
        <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={produto.foto} alt={produto.nome} />
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-900">{produto.nome}</div>
            <div className="flex align-items-center gap-3">
              <span className="flex align-items-center gap-2">
                <i className="pi pi-tag"></i>
                <span className="font-semibold">Categoria</span> {/* Substituí "categoria" pelo valor real da categoria */}
              </span>
            </div>
          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <span className="text-2xl font-semibold">${sb}</span>
            <div className="flex gap-2">
              <Button icon="pi pi-minus" onClick={diminuirQuantidade} className="p-button-rounded p-button-outlined" />
              <span className="text-2xl font-semibold">{qt}</span>
              <Button icon="pi pi-plus" onClick={aumentarQuantidade} className="p-button-rounded p-button-outlined" />
              <Button icon="pi pi-shopping-cart" className="p-button-rounded"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCarrinhoComponent;