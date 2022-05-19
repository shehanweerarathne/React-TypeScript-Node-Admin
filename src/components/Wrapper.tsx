import React, {Component} from 'react';
import Nav from "./Nav";
import Menu from "./Menu";
import Users from "../pages/Users/Users";

type Props = {
    children: React.ReactNode;
};

class Wrapper extends React.Component<Props> {
    render() {
        return (
            <div>
                <Nav/>
                <div className="container-fluid">
                    <div className="row">
                        <Menu/>
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrapper;
