import React, {Component} from "react";
import PanelComponent from "./PanelComponent";
import uuid from "uuid";
import "./App.css";
import {Responsive, WidthProvider} from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayKeys: [
                {
                    uuid: uuid.v1(),
                    dataGrid: {
                        x: 0,
                        y: Infinity,
                        w: 1,
                        h: 1
                    }
                }
            ]
        };
    };

    addPanel = () => {
        const newUuid = uuid.v1();

        this.setState({
            arrayKeys: [
                ...this.state.arrayKeys,
                {
                    uuid: newUuid,
                    dataGrid: {
                        x: this.state.arrayKeys.length % (2),
                        y: Infinity,
                        w: 1,
                        h: 1
                    }
                }
            ]
        })
    };

    remove = (uuid) => {
        const newsArrayKeys = this.state.arrayKeys.filter(item => {
            return item.uuid !== uuid;
        });

        this.setState({
            arrayKeys : newsArrayKeys
        });
    };

    render() {

        const PanelComponents = this.state.arrayKeys.map(item => {
            return (
                <div
                    key={item.uuid}
                    data-grid={item.dataGrid}
                    className="react-grid-component"
                >
                    <PanelComponent
                        uuid={item.uuid}
                        remove={this.remove}
                    />
                </div>
            );
        });

        return (
            <div className="App">
                <ResponsiveReactGridLayout
                    className="layout"
                    cols={{lg: 2, md: 2, sm: 2, xs: 2, xxs: 2}}
                >
                    {PanelComponents}
                </ResponsiveReactGridLayout>
                <a href="#" onClick={this.addPanel}>Add uuid component</a>
            </div>
        );
    }
}

export default App;
