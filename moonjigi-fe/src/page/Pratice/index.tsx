import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import styles from "./index.module.scss";
import axios from "axios";

const Practice = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>("");

  const [deobfuscatedCode, setDeobfuscatedCode] = useState<string | null>(null);
  const [AST, setAST] = useState<string | null>(null);
  const [opcode, setOpcode] = useState<any | null>(null);
  const [rankedWordsResult, setRankedWordsResult] = useState<any | null>(null);
  const [prediction, setPrediction] = useState<number | null>(null);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setSelectedFileName(file.name);
      e.target.value = "";
    }
  };

  const cleanResponseData = (data: string) => {
    return data
      .replace(/Deprecated:[^\n]*\n/g, "") // Deprecated 메시지 제거
      .replace(/\\n/g, "\n") // 줄바꿈 처리
      .replace(/\\t/g, "\t") // 탭 처리
      .replace(/\\"/g, '"') // 큰따옴표 처리
      .replace(/\\/g, "") // 역슬래시 처리
      .replace(/&/g, "&amp;") // HTML 앰퍼샌드 처리
      .replace(/</g, "&lt;") // HTML less than 처리
      .replace(/>/g, "&gt;") // HTML greater than 처리
      .trim(); // 앞뒤 공백 제거
  };

  const uploadFile = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      let responseData = response.data;

      setDeobfuscatedCode(cleanResponseData(responseData.Deobfuscated_Code));
      setAST(cleanResponseData(responseData.AST));
      setOpcode(cleanResponseData(responseData.Opcode));
      setRankedWordsResult(responseData.Ranked_Words_Result);
      setPrediction(responseData.Prediction);

      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const attachFile = selectedFileName && (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div>{selectedFileName}</div>
      <button
        style={{ backgroundColor: "transparent" }}
        onClick={() => {
          setSelectedFile(null);
          setSelectedFileName("");
        }}
      >
        <VscClose style={{ color: "white" }} size="30" />
      </button>
    </div>
  );

  return (
    <div>
      <div className={styles.attachScreen}>
        <h2 className={styles.title}>직접 실습해보세요 👻</h2>
        <div className={styles.input}>
          <div className={styles.inputFile}>
            {attachFile}
            {!selectedFile && (
              <input
                type="file"
                name="file"
                onChange={onSelectFile}
                accept=".php" // PHP 파일만 선택 가능
              />
            )}
            {selectedFile && (
              <button className={styles.button} onClick={uploadFile}>
                Go!
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={styles.resultSection}>
        {deobfuscatedCode && (
          <div>
            <h3>비난독화된 PHP 코드</h3>
            <div className={styles.resultWrapper}>
              <div className={styles.resultBox}>
                <pre>{deobfuscatedCode}</pre>
              </div>
            </div>
          </div>
        )}

        {AST && (
          <div>
            <h3>AST 결과 (JSON 형식)</h3>
            <div className={styles.resultWrapper}>
              <div className={styles.resultBox}>
                <pre>{AST}</pre>
              </div>
            </div>
          </div>
        )}

        {opcode && (
          <div>
            <h3>Opcode 결과 (JSON 형식)</h3>
            <div className={styles.resultWrapper}>
              <div className={styles.resultBox}>
                <pre>{opcode}</pre>
              </div>
            </div>
          </div>
        )}

        {rankedWordsResult && (
          <div>
            <h3>Ranked Words Result</h3>
            <div className={styles.resultWrapper}>
              <div className={styles.resultBox}>
                <pre>{JSON.stringify(rankedWordsResult, null, 2)}</pre>
              </div>
            </div>
          </div>
        )}

        {prediction !== null && (
          <div>
            <h3>Prediction 결과</h3>
            <p className={styles.result}>
              {prediction === 1
                ? "웹쉘 파일로 예측됨 👿"
                : "정상 파일로 예측됨 😇"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practice;
