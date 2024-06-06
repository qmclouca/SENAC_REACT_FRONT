export interface Pagamento{
    
        status: string,
        personType: string,
        cpfCnpj: number,
        name: string,
        birthDate: Date,
        companyName: string,
        companyType: string,
        email: string,
        phone: number,
        mobilePhone: number,
        postalCode: string,
        address: string,
        addressNumber: number,
        complement: string,
        province: string,
        city: {
          object: string,
          id: number,
          ibgeCode: number,
          name: string,
          districtCode: number,
          district: string,
          state: string
        },
        denialReason: string,
        site: string,
        revenueServiceRegister: number,
        incomeRange: string
      
}