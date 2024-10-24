import styles from "./ImageWithText.module.scss";
import { ReactNode } from "react"; // Import the SCSS module

interface ImageWithTextProps {
  children: ReactNode;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ children }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.styledImage}
        src="src/assets/terminal.png"
        alt="background"
      />
      <div className={styles.textOverlay}>{children}</div>
    </div>
  );
};

export default ImageWithText;
