import * as React from "react";
import Account from "./Account";
import Books from "./Books";
import Book, {BookProps} from "./Book";

export interface AppProps {
    loading: boolean;
}

export default class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            abstractBooks: [],
            loading: true,
            geoX: 0,
            geoY: 0,
            userId: "0",
        };
        this.fetchDefaultBookData = this.fetchDefaultBookData.bind(this);
        this.fetchDefaultBookData();
    }

    state = {
        abstractBooks: [] as BookProps[],
        loading: true,
        geoX: 0,
        geoY: 0,
        userId: "0",
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
        if (this.state.loading) {
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
                {/*{this.props.loading && <div className="loading" />}*/}
                <div className="header">
                    <h1 className="header-title">Sale your books</h1>
                    <Account isLoggedIn={false}/>
                </div>
                {booksDiv}
                <div className="footer">this is just a footer</div>
            </div>
        );
    }
}
