import * as React from "react";
import {Redirect} from "react-router-dom";
import {BookProps} from "./Book";
import Account from "./Account";

export class ChatProps {
}

export default class Upload extends React.Component<ChatProps, {}> {
    constructor(props: ChatProps) {
        super(props);
        this.state = {
            userId: "",
            redirectRoot: false,
            bookName: "",
            bookImage: "",
            bookPrice: 0,
            bookId: "",
            bookDescription: "",
            bookSeller: "",
            bookSellerImage: "",
            bookSellerContact: ""};

        this.redirectToRootPage = this.redirectToRootPage.bind(this);
        this.fetchDetailBook = this.fetchDetailBook.bind(this);

        this.fetchDetailBook();
    }
    state = {
        userId: "",
        redirectRoot: false,
        bookName: "",
        bookImage: "",
        bookPrice: 0,
        bookId: "",
        bookDescription: "",
        bookSeller: "",
        bookSellerImage: "",
        bookSellerContact: ""};

    redirectToRootPage() {
        this.setState({redirectRoot: true});
    }

    uploadBook() {
        // fetch?
        this.setState({redirectRoot: true});
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
                    bookSellerImage: json.bookSellerImage,
                    bookSellerContact: json.bookSellerContact
                });
                console.log("Update book data successfully");
            });
        });
    }

    render() {
        let page;
        if (this.state.redirectRoot) {
            page = <Redirect to="/" />;
        } else {
            page =
                <div className="upload-div">
            <form className="upload-form">
                <label className="upload-label">
                    Book Name:
                    <input className="upload-input" type="text" name="bookName" />
                </label>
                <label className="upload-label">
                    Book Price:
                    <input className="upload-input" type="text" name="bookPrice" />
                </label>
                <label className="upload-label">
                    Book Description:
                    <input className="upload-input" type="text" name="bookDescription" />
                </label>
                <label className="upload-label">
                    Book Image:
                    <input className="upload-input" type="file" accept="image/*" multiple={false} name="bookImage" />
                </label>
                <input type="submit" value="Submit" />
            </form>
                </div>;
        }

        return (
            <div className="main">
                <div className="header">
                    <h1 className="header-title">Sell your books</h1>
                    <Account isLoggedIn={false}/>
                    <img className = "upload-icon" src="./../../assets/upload.png"/>
                </div>
                {page}
            </div>
        );
    }
}