import * as React from "react";
import {Redirect} from "react-router-dom";
import {BookProps} from "./Book";
import Account from "./Account";

export class ChatProps {
}

export default class Chat extends React.Component<ChatProps, {}> {
    constructor(props: ChatProps) {
        super(props);
        this.state = {
            userId: "",
            redirectRoot: false,
            redirectMessage: false,
            loading: true,
            bookName: "",
            bookImage: "",
            bookPrice: 0,
            bookId: "",
            bookDescription: "",
            bookSeller: "",
            bookSellerImage: ""};

        this.redirectToRootPage = this.redirectToRootPage.bind(this);
        this.redirectToMessagePage = this.redirectToMessagePage.bind(this);
        this.fetchDetailBook = this.fetchDetailBook.bind(this);

        this.fetchDetailBook();
    }
    state = {
        userId: "",
        redirectRoot: false,
        redirectMessage: false,
        loading: true,
        bookName: "",
        bookImage: "",
        bookPrice: 0,
        bookId: "",
        bookDescription: "",
        bookSeller: "",
        bookSellerImage: ""};

    redirectToRootPage() {
        this.setState({redirectRoot: true});
    }

    redirectToMessagePage() {
        this.setState({redirectMessage: true});
    }

    fetchDetailBook() {
        console.log("Fetching detail");
        fetch("http://localhost:3000/v1/books/getBookDetail").then(response => {
            response.json().then(json => {
                console.log(json.bookId);

                this.setState({
                    loading: false,
                    bookName: json.bookName,
                    bookImage: json.bookImage,
                    bookPrice: json.bookPrice,
                    bookId: json.bookId,
                    bookDescription: json.bookDescription,
                    bookSeller: json.bookSeller,
                    bookSellerImage: json.bookSellerImage
                });
                console.log("Update book data successfully");
            });
        });
    }

    render() {
        let page;
        if (this.state.loading) {
            page =
                <div className="detail-base">
                    <div className="header">
                        <h1 className="header-title">Sell your books</h1>
                        <Account isLoggedIn={false}/>
                    </div>
                    <img src="../../assets/loading.gif"/>
                </div>;
        } else if (this.state.redirectRoot) {
            page = <Redirect to="/" />;
        } else if (this.state.redirectMessage){
            page = <Redirect to="/message"/>;
        } else {
            page =
                <div className="detail-base">
                    <div className="header">
                        <h1 className="header-title" onClick={this.redirectToRootPage}>Sell your books</h1>
                        <Account isLoggedIn={false}/>
                    </div>
                    <img src={this.state.bookImage} alt="Image" className="detail-book-image"/>
                    <div className="detail-wrap">
                        <div className="detail-book-name">{this.state.bookName}</div>
                        <div className="detail-book-content">
                            <div className="detail-book-price">$ {this.state.bookPrice}</div>
                            <div className="detail-book-description">{this.state.bookDescription}</div>
                        </div>
                        <div className="detail-contact-button">
                            <img src={this.state.bookSellerImage} alt="Seller" className="detail-seller-image"/>
                            <div className="detail-seller-text">Contact Seller Now !</div>
                        </div>
                    </div>
                </div>;
        }

        return (
            page
        );
    }
}