export type Quote = {
    id: BigInt;
    dialogue: boolean;
    source: string;
    private: boolean;
    tags: string[];
    url: string;
    favorites_count: Int;
    upvotes_count: Int;
    downvotes_count: Int;
    author: string;
    author_permalink: string;
    body: string;
}