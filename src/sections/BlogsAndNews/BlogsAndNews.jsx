import styles from "./BlogsAndNews.module.css";
import detoxImg from "../../assets/detox_img.png";
import authorImg from "../../assets/author.jpg.png";

const arr = [0, 1, 2];
export const BlogsAndNews = () => {


    return(
        <div className={styles.root}>
            <div className={styles.mainContainer}>
                <div className={styles.headingContainer}>
                    <div className={styles.firstHeading}>Blog & News</div>
                    <div className={styles.secondHeading}>Read Our Latest News</div>
                </div>

                <div className={styles.newsContainer}>
                    {arr.map((i) => <div key={i} className={styles.card}>
                           <div><img className={styles.newsImage} src={detoxImg} alt="detox-pic" /></div> 
                           <div className={styles.topicAndDate}>Medical<span className={styles.topicAndDateSeparator}>|</span>March 31, 2022 </div>
                           <div className={styles.newsHeadline}>6 Tips To Protect Your Mental Health When You’re Sick</div>
                           <div className={styles.authorDetails}>
                                <div><img src={authorImg} alt="authorImg" /></div>
                                <div className={styles.authorName}>Rebecca Lee</div>
                           </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}