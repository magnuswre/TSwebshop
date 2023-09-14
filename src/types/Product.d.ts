interface Product {
    _id:         string; 
    name:        string;
    description: string;
    price:       number;
    imageURL:    string;
    title?:      string;
}

interface ExtendedProduct extends Product {
    isEco?: string;
    AllergyInfo: string;
}