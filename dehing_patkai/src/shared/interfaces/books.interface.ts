export type Category = {
    id:number;
    name:string;
    description:string;
};

export type Image = {
    thumb:string;
    mid:string;
    large:string;
};

export type Ratings = {
    star_5:number;
    star_4:number;
    star_3:number;
    star_2:number;
    star_1:number;
};

export type Review = {
    stars:number;
    comment:string;
};

export type Book = {
    id: number; 
    categories:number[];
    categories_details: Category[];
    cover_images:Image;
    additional_images:Image[];
    name:string;
    price: number;
    discount: number;
    description:string;
    rating_total: number;
    star_ratings: Ratings;
    reviews:Review[];
}