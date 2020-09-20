import * as React from "react";
import { Redirect } from "react-router-dom";

export class BookProps {
    bookName: string;
    bookImage: string;
    bookPrice: number;
    bookId: string;
}

export default class Book extends React.Component<BookProps, {}> {
    constructor(props: BookProps) {
        super(props);
        this.state = {userId: "", redirect: false};

        this.redirectToDetailPage = this.redirectToDetailPage.bind(this);
    }
    state = {userId: "", redirect: false};

    redirectToDetailPage() {
        this.setState({redirect: true});
    }

    render() {
        let page;
        if (!this.state.redirect) {
            page = <div className="book-outer" onClick={this.redirectToDetailPage}>
                <div className="book-abstract" id={this.props.bookId} onClick={this.redirectToDetailPage}>
                    <img className="book-abstract-image" src={this.props.bookImage} alt={this.props.bookName} onClick={this.redirectToDetailPage}/>
                    <p className="book-abstract-name" onClick={this.redirectToDetailPage}>{this.props.bookName}</p>
                    <div className="book-price-wrapper" onClick={this.redirectToDetailPage}>
                        <p className="book-abstract-price"  onClick={this.redirectToDetailPage}>$ {this.props.bookPrice}</p>
                        <div className="book-old-price" onClick={this.redirectToDetailPage}>
                            <del>$ {this.props.bookPrice + 2}</del>
                        </div>
                    </div>
                    <div className="book-buy-now" onClick={this.redirectToDetailPage}></div>
                </div>
            </div>;
        } else {
            page = <Redirect to="/detail"/>;
        }

        return (
            page
        );
    }
}
