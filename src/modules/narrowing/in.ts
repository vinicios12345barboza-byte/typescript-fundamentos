export const bootstrap = (): void => {
  /*
  type Item = {
    id: string;
    [key: string]: string | null;
  };

  const response: Item[] = [
    { id: 'nidfgh98w45', car: 'ix35' },
    { id: 'nfdt321545', song: 'Racionais' },
    { id: 'vkisaurw321', car: 'golf sapão' },
    { id: 'vsafbt71234n', song: 'uiui' },
  ];

  function showTimes(items: Item[]): void {
    const body = document.querySelector('body');

    if (body instanceof HTMLBodyElement) {
      items.map((item) => {
        const itemElement = document.createElement('div');
        if ('song' in item) {
          itemElement.textContent = item.song;
          itemElement.style.background = 'darkblue';
        } else if ('car' in item) {
          itemElement.textContent = item.car;
          itemElement.style.background = 'darkred';
        }
        body.appendChild(itemElement);
      });
    }
  }
  showTimes(response);
   */

  enum ServerStatus {
    online = 'ONLINE',
    offline = 'OFFLINE',
    maintenance = 'Manutenção',
  }

  type Hardware = {
    vCpus: number;
    ramGb: number;
    storageType: 'SDD' | 'NVME';
  };

  type Pricing = string | number;

  type Server = {
    readonly id: string;
    name: string;
    status: ServerStatus;
    speces: Hardware;
    cost?: Pricing;
  };

  function checkServer(server: Server): void {
    if (server.status === ServerStatus.online) {
      console.log(`[STATUS]: Servidor online! ${server.name}`);
    } else if (server.status === ServerStatus.offline) {
      console.log(`[STATUS]: ALERTA! Servidor off :( ! ${server.name}`);
    } else if (server.status === ServerStatus.maintenance) {
      console.log(`[STATUS]: Servidor ${server.name} em manutenção`);
    }

    const custo = server.cost ?? 'Custo não definido';

    if (typeof custo === 'number') {
      console.log(`[INFRA]: Custo mensal: R$ ${custo + 20}`);
    } else {
      console.log(`[INFRA]: Custo mensal: R$ ${custo}`);
    }
  }

  const meuServer: Server = {
    id: 'linux',
    name: 'Servidor caseiro',
    status: ServerStatus.online,
    speces: {
      vCpus: 4,
      ramGb: 16,
      storageType: 'NVME',
    },
    cost: 3500
  };

  console.log('---- INICIANDO SERVER');
  checkServer(meuServer);
};
bootstrap()
