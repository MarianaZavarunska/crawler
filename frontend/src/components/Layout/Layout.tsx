import React, {FC} from 'react';
import { Outlet} from "react-router-dom";

import "./Layout.css";

const Layout:FC = () => {
    return (
        <div className={"layout-container"}>
            <Outlet/>
        </div>
    );
};

export {Layout};
