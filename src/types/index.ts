export interface ListParams {
    _page?: number;
    _limit?: number;
    q?: string;
    [key: string]: any; 
  }
  
  export interface ItemParams {
    id: string;
  }
  
  export interface CreateUpdateParams {
    [key: string]: any;
  }
  

  export interface Address {
    zipCode: string;
    city: string;
    street: string;
    country: string;
    state: string;
  }
  
  export interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    jobTitle: string;
    address: Address;
  }
  
  export interface Contacts {
    main: Contact;
  }
  
  

  
  export interface Client {
  id: string;
  givenName: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  [key: string]: any; 
}

export interface Site {
  id: string;
  clientId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  contacts: {
    main: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      jobTitle: string;
      address: {
        zipCode: string;
        city: string;
        street: string;
        country: string;
        state: string;
      };
    };
  };
  address: {
    zipCode: string;
    city: string;
    street: string;
    country: string;
    state: string;
  };
  images: string[];
  tags: string[];
  [key: string]: any; 
}

export interface Item {
  id: string;
  [key: string]: any;
}