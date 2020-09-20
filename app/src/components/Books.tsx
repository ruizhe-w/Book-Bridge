import * as React from "react";
import Book, {BookProps} from "./Book";

export interface BooksProps {
    userId: string,
    geoX: number,
    geoY: number
    abstractBooks: BookProps[]
}

export default class Books extends React.Component<BooksProps, {}> {
    state = {geoX: 0, geoY: 0};
    private readonly items: any[];

    constructor(props: BooksProps) {
        super(props);
        this.state = {geoX: 0, geoY: 0};

        this.items = [];

        for (const [index, value] of this.props.abstractBooks.entries()) {
            this.items.push(<Book key={index} bookId={value.bookId} bookImage={value.bookImage}
                                  bookName={value.bookName} bookPrice={value.bookPrice}/>);
        }
    }

    render() {
        return (
            <div>
                {this.items}
            </div>
        );
    }
}
