export const bootstrap = () => {
  class BankAccount {
    protected holder: string;
    protected balance: number;

    constructor(holder: string, balance: number) {
      this.holder = holder;
      this.balance = balance;
    }

    public getHolder(): string {
      return this.holder;
    }
  }

  class ChekingAcconut extends BankAccount {
    private overdraftLimit: number;

    constructor(holder: string, balance: number, overdraftLimit: number) {
      super(holder, balance);
      this.overdraftLimit = overdraftLimit;
    }

    public getOveerdraftLimit(): number {
      return this.overdraftLimit;
    }
  }

  class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(holder: string, balance: number, interestRate: number) {
      super(holder, balance);
      this.interestRate = interestRate;
    }

    public getInterestRate(): number {
      return this.interestRate;
    }
  }

  // lista de contas bancarias(LSP)
  const accountList: BankAccount[] = [
    new ChekingAcconut('Vinicios', 3500, 500),
    new SavingsAccount('Sarah', 4000, 0.005),
    new ChekingAcconut('Vin', 13500, 5100),
    new SavingsAccount('Sarh', 5200, 0.002),
  ];

  function processAccounts(accounts: BankAccount[]): void {
    accounts.forEach((account) => {
      if(account instanceof ChekingAcconut){
        console.log(`Processando a conta corrente`, account.getOveerdraftLimit)
      } else if(account instanceof SavingsAccount){
        console.log(`Processando a conta poupança:`, account.getInterestRate)
      } 
      console.log(`-----------`)
    });
  }
  processAccounts(accountList);
  /*
    class ErroCustomizado{
        codigo: number = 401
    }

    function processar(obj: ErroCustomizado | Error ) {
        if(obj instanceof ErroCustomizado){
            console.log(`Código: ${obj.codigo}`)
        } else{
            console.log(`Erro: ${obj.message}`)
        }
    }
    processar(new ErroCustomizado())
    */
};
