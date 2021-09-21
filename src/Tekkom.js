import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from 'antd';
import "antd/dist/antd.css";

export default class Tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            visible: false,
//nama asal nim diganti sesuai yang ada di API mu
            title: "",
            text: "",
            author: "",
            image_url: "",
        };
    }

    handleButton = (id) => {
        alert(id);
    };

        componentDidMount() {
            axios({
                method: "get",
//link nya ganti sesuai API mu
                url: "http://localhost:8000/cards",
                headers: {
                    accept: "*/*",
                },
            })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    cards: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
        }
        render() {
            return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1>Image Explorer</h1>
                    </center>
                    {this.state.cards.map((results, index) => {
                        return (
//result.xxxx diganti sesuai yang telah mbo masukin di yg tadi diatas
                            <Card style={{display:'inline-block', margin:'40px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
                                <h4 className="card-title">{results.title}</h4>
                                <img src={results.image_url}/>  
                                    <h5 className="card-subtitle mb-2 text-muted">
                                        Text : {results.text}
                                    </h5>
                                    <h5 className="card-subtitle mb-2 text-muted">
                                        author : {results.author}
                                    </h5>
                                                                       <Button
                                    type="primary"
                                    shape="round"
                                    style={{margin:'15px 25px 0px 25px'}}
                                    onClick={() => this.handleButton(results.text)}>
                                    Open
                                    </Button>
                            </Card>
                    )},
                    )}
                </div>
            </div>
        );
    }
}