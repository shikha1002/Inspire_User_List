
export interface user {
    author: string;
    birthday: string;
    birthPlace: string;
    books: book[];
}

export interface book {
    imageUrl: string;
    title: string;
    purchaseLink: string;
    PublishDate: string;
}