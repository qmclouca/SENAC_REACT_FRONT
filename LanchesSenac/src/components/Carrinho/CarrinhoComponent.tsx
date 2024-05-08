import React from "react";
import { DataView } from 'primereact/dataview';
import { CarrinhoProps } from "../../interfaces/CarrinhoProps";
import "./CarrinhoComponent.css";
import { ItemCarrinhoProps } from "../../interfaces/ItemCarrinhoProps";
import { classNames } from "primereact/utils";

const CarrinhoComponent: React.FC<CarrinhoProps> = ({ pedido }) => {
  const itemTemplate = (item: ItemCarrinhoProps, index: number) => {
    return (
      <div className="col-12" key={item.produto.id}>
        <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
          <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={item.produto.foto} alt={item.produto.nome} />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{item.produto.nome}</div>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{/* Adicione a categoria do produto aqui */}</span>
                </span>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${item.subtotal}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listTemplate = (items: ItemCarrinhoProps[]) => {
    if (!items || items.length === 0) return null;

    let list = items.map((item, index) => {
      return itemTemplate(item, index);
    });

    return <div className="grid grid-nogutter">{list}</div>;
  };

  return (
    <div className="carrinho-container">
      <DataView value={pedido.itens} listTemplate={listTemplate} />
    </div>
  );
};

export default CarrinhoComponent;