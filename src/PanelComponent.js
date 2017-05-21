import React from "react";
import "./PanelComponent.css";

const PanelComponent = (props) => {
    return (
        <div className="panel-component">
            <span className="remove" onClick={() => props.remove(props.uuid)}>x</span>
            <h3>{props.uuid}</h3>
        </div>
    );
};

export default PanelComponent;