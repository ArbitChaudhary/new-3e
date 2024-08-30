import { useState } from "react";
import styles from "./faq.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

interface IFAQs {
  question: string;
  reply: string;
}

const faqs: IFAQs[] = [
  {
    question: "What makes you different from other Firms?",
    reply:
      "At Launch Business Law, we distinguish ourselves with personalized, expert legal services in IP & trademark, franchise, and corporate law. Our tailored solutions, innovative approach, and commitment to clear communication ensure that your business receives precise and effective legal support. With a proven track record and global perspective, we’re dedicated to helping your business thrive",
  },
  {
    question: "What information should i provide to case?",
    reply:
      "At Launch Business Law, we distinguish ourselves with personalized, expert legal services in IP & trademark, franchise, and corporate law. Our tailored solutions, innovative approach, and commitment to clear communication ensure that your business receives precise and effective legal support. With a proven track record and global perspective, we’re dedicated to helping your business thrive",
  },
];

function FAQ() {
  const [isOpen, setIsOpen] = useState<number>();

  const handleToggle = (index: number) => {
    setIsOpen(index);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.faqs}>
          <div className={styles.header}>FAQs</div>
          <div className={styles.faq_list}>
            {faqs?.map((item, index) => (
              <div className={styles.question_reply}>
                <div
                  key={index}
                  className={styles.question_flex}
                  onClick={() => handleToggle(index)}
                >
                  <div
                    className={
                      isOpen === index
                        ? styles.question_selected
                        : styles.question_box
                    }
                  >
                    <div className={styles.question}>{item.question}</div>
                  </div>
                  {isOpen === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
                {isOpen === index && (
                  <div className={styles.reply_box}>
                    <div className={styles.reply}>{item.reply}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
