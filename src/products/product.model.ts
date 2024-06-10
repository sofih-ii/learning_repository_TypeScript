export type Sizes = 'M'|'L'|'S'|'XS'|'XL'
export type Product = {
    name: string,
    createAt: Date,
    stock: number,
    size?: Sizes
};
