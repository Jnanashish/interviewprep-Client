import React from "react";
import ContentLoader from "react-content-loader";

// import css for loader
// import "../../CSS/linkUi.css"
import styles from "./loader.module.scss";

const MyLoader = (props) => (
    <div>
        <div className={styles.loader_laptop}>
            <ContentLoader
                className={styles.loader}
                speed={1}
                width={800}
                height={1080}
                backgroundColor="#EFF2FB"
                foregroundColor="#e1ebff"
                {...props}>
                <rect x="0" y="0" rx="0" ry="30" width="800" height="100" />
                <rect x="0" y="120" rx="0" ry="30" width="800" height="100" />
                <rect x="0" y="240" rx="0" ry="30" width="800" height="100" />
                <rect x="0" y="360" rx="0" ry="30" width="800" height="100" />
                <rect x="0" y="480" rx="0" ry="30" width="800" height="100" />
                <rect x="0" y="600" rx="0" ry="30" width="800" height="100" />
                <rect x="0" y="720" rx="0" ry="30" width="800" height="100" />
                <rect x="0" y="840" rx="0" ry="30" width="800" height="100" />
                <rect x="0" y="1080" rx="0" ry="30" width="800" height="100" />
            </ContentLoader>
        </div>

        {/* for desktop  */}
        <div className={styles.loader_mobile}>
            <ContentLoader
                className={styles.loader}
                speed={5}
                width={1500}
                height={1500}
                backgroundColor="#EEE"
                foregroundColor="#FeFeFe"
                {...props}>
                <rect x="0" y="0" rx="0" ry="30" width="1200" height="120" />
                <rect x="0" y="450" rx="0" ry="30" width="1200" height="120" />
                <rect x="0" y="150" rx="0" ry="30" width="1200" height="120" />
                <rect x="0" y="300" rx="0" ry="30" width="1200" height="120" />
                <rect x="0" y="600" rx="0" ry="30" width="1200" height="120" />
                <rect x="0" y="750" rx="0" ry="30" width="1200" height="120" />
                <rect x="0" y="900" rx="0" ry="30" width="1200" height="120" />
                <rect x="0" y="1050" rx="0" ry="30" width="1200" height="120" />
                <rect x="0" y="1200" rx="0" ry="30" width="1200" height="120" />
            </ContentLoader>
        </div>
    </div>
);

export default MyLoader;
