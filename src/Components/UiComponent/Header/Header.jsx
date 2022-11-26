import React from "react";
import styles from "./header.module.scss";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header_con}>
            <div className={styles.header}>
                <Link to={`/`}>
                    <h2 className={styles.logo}>
                        careers@<span>tech</span>
                    </h2>
                </Link>
            </div>
        </div>
    );
};

export default Header;
