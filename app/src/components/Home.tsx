import * as React from "react";
import Account from "./Account";
import Books from "./Books";
import Book, {BookProps} from "./Book";
import Upload from "./Upload";
import {Redirect} from "react-router-dom";

export interface HomeProps {
    loading: boolean;
}

export default class Home extends React.Component<HomeProps, {}> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            abstractBooks: [],
            loading: true,
            geoX: 0,
            geoY: 0,
            userId: "0",
            redirectUpload: false,
        };
        this.fetchDefaultBookData = this.fetchDefaultBookData.bind(this);
        this.redirectUploadFunc = this.redirectUploadFunc.bind(this);
        this.fetchDefaultBookData();
    }

    redirectUploadFunc() {
        this.setState({redirectUpload: true});
    }

    state = {
        abstractBooks: [] as BookProps[],
        loading: true,
        geoX: 0,
        geoY: 0,
        userId: "0",
        redirectUpload: false,
    };

    fetchDefaultBookData() {
        console.log("Fetching books");
        fetch("http://localhost:3000/v1/books/getAllBooksNearby").then(response => {
            response.json().then(json => {
                console.log(json.a);
                let newBooks = [];
                for (const [index, value] of json.a.entries()) {
                    let book: BookProps = new BookProps();
                    book.bookName = value.bookName;
                    book.bookImage = value.bookImage;
                    book.bookId = value.bookId;
                    book.bookPrice = value.bookPrice;
                    newBooks.push(book);
                }


                this.setState({
                    abstractBooks: json.a,
                    loading: false
                });
                console.log("Update book data successfully");
            });
        });
    }


    render() {
        console.log("Init app");
        let booksDiv;
        if (this.state.redirectUpload) {
            booksDiv  = <Redirect to="/upload" />;
        } else if (this.state.loading) {
            booksDiv = <div className="main">
                <img src="../../assets/loading.gif"/>
            </div>;
        } else {
            booksDiv =
                <div className="main">
                    <Books geoX={this.state.geoX} geoY={this.state.geoY} userId={this.state.userId} abstractBooks={this.state.abstractBooks}/>
                </div>;
        }
        return (
            <div className="app">
                <div className="header">
                    <h1 className="header-title">Sell your books</h1>
                    <Account isLoggedIn={false}/>
                    <img className = "upload-icon" src="./../../assets/upload.png" onClick={this.redirectUploadFunc}/>
                </div>
                {booksDiv}
                <div className="footer">this is just a footer</div>
            </div>
        );
    }
}
