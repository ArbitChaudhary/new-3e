import { IChildrenProps } from "@/common/interface/children-props.interface";
import styles from "./primary_layout.module.scss";
import Header from "@/components/home/header/header";

interface IPrimaryLayout extends IChildrenProps {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default PrimaryLayout;
