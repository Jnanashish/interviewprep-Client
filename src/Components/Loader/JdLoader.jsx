import React from "react";
import ContentLoader from "react-content-loader";

// import "../../CSS/linkUi.css"
import styles from "./loader.module.scss";

const JdLoader = (props) => (
    <div>
        <div className={styles.loader_laptop}>
            <ContentLoader
                className={styles.loader}
                speed={3}
                width={800}
                height={800}
                backgroundColor="#EFF2FB"
                foregroundColor="#e1ebff"
                {...props}>
                <rect x="0" y="0" rx="0" ry="30" width="1000" height="35" />
                <rect x="0" y="45" rx="0" ry="30" width="200" height="35" />
                <rect x="0" y="140" rx="0" ry="30" width="800" height="200" />
                <rect x="0" y="380" rx="0" ry="30" width="800" height="400" />
            </ContentLoader>
        </div>

        {/* For desktop */}
        <div className={styles.loader_mobile}>
            <ContentLoader
                className={styles.loader}
                speed={3}
                width={4000}
                height={1000}
                viewBox="0 0 3000 4000"
                backgroundColor="#EFF2FB"
                foregroundColor="#e1ebff"
                {...props}>
                <rect x="0" y="0" rx="3" ry="30" width="3500" height="180" />
                <rect x="0" y="250" rx="3" ry="30" width="1500" height="180" />
                <rect
                    x="0"
                    y="650"
                    rx="3"
                    ry="160"
                    width="4000"
                    height="1000"
                />
                <rect
                    x="0"
                    y="1800"
                    rx="3"
                    ry="30"
                    width="3000"
                    height="1500"
                />
            </ContentLoader>
        </div>
    </div>
);

export default JdLoader;
