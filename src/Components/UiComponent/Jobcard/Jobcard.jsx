import React from "react";

//import css
import styles from "./jobcard.module.scss";

const Jobcard = (props) => {
    const {
        title,
        degree,
        batch,
        imagePath,
        jobtype,
        location,
        experience,
        jdpage,
    } = props.data;

    return (
        <div className={styles.jobcard_con}>
            <div className={styles.companylogo_con}>
                {imagePath === "none" && (
                    <div className={styles.logotext}>
                        <p>{title[0]}</p>
                    </div>
                )}
                {imagePath !== "none" && (
                    <img src={imagePath} alt="Company logo" />
                )}
            </div>

            <p className={styles.jobtitle}>{title}</p>
            <div className={styles.jobdetails}>
                <div className={styles.jobdetails_item}>
                    <h5>Degree :</h5>
                    <p>{degree}</p>
                </div>
                <div className={styles.jobdetails_item}>
                    <h5>Batch :</h5>
                    <p>{batch}</p>
                </div>
                {experience !== "N" && (
                    <div className={styles.jobdetails_item}>
                        <h5>Exp :</h5>
                        <p>{experience}</p>
                    </div>
                )}
                {experience === "N" && location !== "N" && (
                    <div className={styles.jobdetails_item}>
                        <h5>Location :</h5>
                        <p>{location}</p>
                    </div>
                )}
                {experience === "N" && location === "N" && (
                    <div className={styles.jobdetails_item}>
                        <h5>Jobtype :</h5>
                        <p>{jobtype}</p>
                    </div>
                )}
            </div>
            {jdpage === "false" && (
                <button className={styles.apply_btn}>Apply Now</button>
            )}
            {jdpage === "true" && (
                <button className={styles.apply_btn}>View Job</button>
            )}
        </div>
    );
};

export default Jobcard;
