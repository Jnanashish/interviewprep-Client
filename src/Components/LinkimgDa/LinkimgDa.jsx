import React from "react";
import { useSelector } from "react-redux";

// import components
import Linkimgcard from "./Linkimgcard";
import Telegrambanner from "../Telegram/Telegrambanner";

// import methods of api call
import { countAdLinkImgClick } from "../../Helper/adapicall";

import styles from "./linkimgcard.module.scss";

const LinkimgDa = (props) => {
    const linkimgdadata = useSelector((state) => state.linkimgda);
    const date = new Date();
    const weeknum = date.getDay();
    const flag = weeknum % 2;

    return (
        <div>
            {linkimgdadata.data.length === 0 && (
                <div>
                    {flag === 1 && (
                        <div>
                            <Telegrambanner />
                        </div>
                    )}
                    {flag === 0 && (
                        <div>
                            <a
                                className={styles.whatsapp_con}
                                href="https://t.openinapp.co/careersattech-3">
                                <p>
                                    Join our Official Telegram channel for
                                    regular updates on Jobs
                                </p>
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                        </div>
                    )}
                    {/* {props.count === 0 && (
                        <div>
                            <a
                                href="https://chat.whatsapp.com/D9o7nej6PoC9yRDIX6c4k5"
                                className={styles.whatsapp_con}>
                                <p>
                                    Join our Whatsapp group for regular updates
                                    on Internships and Jobs.
                                </p>
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    )} */}
                </div>
            )}
            {linkimgdadata.data.length > 0 && (
                <div>
                    {props.count === 0 && linkimgdadata.data.length > 0 && (
                        <a
                            onClick={() =>
                                countAdLinkImgClick(linkimgdadata.data[0]._id)
                            }
                            href={linkimgdadata.data[0].link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Linkimgcard
                                link={linkimgdadata.data[0].link}
                                title={linkimgdadata.data[0].title}
                                para={linkimgdadata.data[0].para}
                                imagePath={linkimgdadata.data[0].imagePath}
                            />
                        </a>
                    )}

                    {props.count === 1 && linkimgdadata.data.length > 1 && (
                        <a
                            onClick={() =>
                                countAdLinkImgClick(linkimgdadata.data[1]._id)
                            }
                            href={linkimgdadata.data[1].link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Linkimgcard
                                link={linkimgdadata.data[1].link}
                                title={linkimgdadata.data[1].title}
                                para={linkimgdadata.data[1].para}
                                imagePath={linkimgdadata.data[1].imagePath}
                            />
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default LinkimgDa;
