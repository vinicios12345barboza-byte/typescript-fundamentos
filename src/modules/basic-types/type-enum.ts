export const bootstrap = (): void => {
  enum OrderStatus {
    PENDENTE, // valor 0
    ENTREGUE = 'Entregue', // atribuindo valores
    CANCELADO = 'Cancelado', // atribuindo strings
  }

  console.log(OrderStatus);
  console.log(OrderStatus.CANCELADO); // recuperando valor do OrderStatus
  //console.log(OrderStatus[23]); // acessando atributo (string)

  //Mesclando os itens
  enum OrderStatus {
    AGUARDANDOPAGAMENTO = 400,
    ENVIADO = 'Enviado',
  }

  function changeOrderStatus(newStatus: OrderStatus): void {
    if (newStatus === OrderStatus.ENVIADO) {
      // enviar email para cliente
      console.log(`Novo status:`, newStatus);
    }
  }

  changeOrderStatus(OrderStatus.ENVIADO);

  enum Status {
    Active = 'ACTIVE',
    Pending = 'PEDING',
  }

  console.log(Status);

  function statusActiveOrNo(stt: Status): void {
    if (stt === Status.Active) {
      console.log(`O usuário está:`, stt);
    } else {
      console.log(`Usário:`, stt);
    }
  }

  statusActiveOrNo(Status.Pending);
};
