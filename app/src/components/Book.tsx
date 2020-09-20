import * as React from "react";

export interface BookProps {
    bookName: string,
    bookImage: string,
    bookPrice: number,
    bookId: string,
}

export default class Book extends React.Component<BookProps, {}> {
    constructor(props: BookProps) {
        super(props);
        this.state = {userId: ""};

    }

    render() {
        return (<div className="book-abstract" id={this.props.bookId}>
            <img className="book-abstract-image" src={this.props.bookImage} alt={this.props.bookName}/>
            <p className="book-abstract-name">{this.props.bookName}</p>
            <p className="book-abstract-price">{this.props.bookPrice}</p>
        </div>)
    }
}
