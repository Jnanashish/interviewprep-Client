import React from "react";

// import components
import Header from "../../Components/UiComponent/Header/Header";
import Jobdash from "../../Components/Jobdash/Jobdashboard";
import Footer from "../../Components/UiComponent/Footer/Footer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Notice from "../../Components/Notice/Notice";

// import css
import styles from "./home.module.scss";

const Home = () => {
    return (
        <div>
            <Header />

            {/* Main tagline banner for desktop view */}
            <div className={styles.header_banner}>
                <p>
                    One place solution to get off-campus <b>Internship</b> and{" "}
                    <b>Job</b> Updates.
                </p>
                <img
                    src="https://i.ibb.co/85HvDR0/girl-min.png"
                    alt="Girl with laptop and coffee"
                />
            </div>

            {/* ---------------Main job description-------------- */}
            <div className={styles.home_grid}>
                <div className={styles.center}>{/* <Jobdash /> */}</div>

                {/* For desktop view only */}
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
            </div>

            <Notice />
            <Footer />
        </div>
    );
};

export default Home;
