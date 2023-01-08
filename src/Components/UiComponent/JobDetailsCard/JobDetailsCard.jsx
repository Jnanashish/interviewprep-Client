import React from "react";
import styles from "./jobDetailsCard.module.scss";

const JobDetailsCard = (props) => {
    const {
        title,
        degree,
        batch,
        imagePath,
        jobtype,
        location,
        experience,
        jdpage,
        createdAt,
    } = props.data;

    return (
        <div className={styles.jobcard_con}>
            {/* company logo or text of first letter of company */}
            <div className={styles.companylogo_con}>
                {imagePath === "none" && (
                    <div className={styles.logotext}>
                        <p>{title[0]}</p>
                    </div>
                )}
                {imagePath !== "none" && (
                    <img
                        className={styles.logoimg}
                        src={imagePath}
                        alt="Company logo"
                    />
                )}
            </div>

            {/* Job details */}
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
                <div className={styles.chipContainer}>
                    <div>
                        {jobtype !== "N" && (
                            <span className={styles.chip}>{jobtype}</span>
                        )}
                        {location !== "N" && (
                            <span
                                style={{ backgroundColor: "#EFFFF0" }}
                                className={styles.chip}>
                                <img
                                    src="https://img.icons8.com/material-outlined/24/null/marker.png"
                                    alt="location logo"
                                />
                                {location}
                            </span>
                        )}
                        {experience !== "N" && (
                            <span
                                style={{ backgroundColor: "#F0ECFF" }}
                                className={styles.chip}>
                                <img
                                    src="https://img.icons8.com/ios-glyphs/30/null/time-machine--v1.png"
                                    alt="time logo"
                                />
                                {experience}
                            </span>
                        )}
                    </div>
                    {createdAt && createdAt !== "null" && (
                        <p className={styles.createdat}>
                            {createdAt
                                .slice(0, 10)
                                .split("-")
                                .reverse()
                                .join("-")}
                        </p>
                    )}
                </div>
            </div>

            {/* button visible only on desktop  */}
            {jdpage === "false" && (
                <button className={styles.apply_btn}>Apply Now</button>
            )}
            {jdpage === "true" && (
                <button className={styles.apply_btn}>View Job</button>
            )}
        </div>
    );
};

export default JobDetailsCard;
