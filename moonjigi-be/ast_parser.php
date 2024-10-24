<?php
require './vendor/autoload.php'; // Composer로 설치한 의존성 로드

use PhpParser\Error;
use PhpParser\ParserFactory;

// PHP 파일 경로와 출력 디렉토리 받기
if ($argc != 3) {
    echo "Usage: php ast_parser.php <php_file> <output_dir>\n";
    exit(1);
}

$filePath = $argv[1];      // PHP 파일 경로
$outputDir = $argv[2];     // JSON 파일을 저장할 디렉토리

// AST를 저장할 디렉토리 생성
if (!is_dir($outputDir)) {
    mkdir($outputDir, 0777, true);
}

// PHP-Parser 인스턴스 생성
$parser = (new ParserFactory)->create(ParserFactory::PREFER_PHP7);

try {
    // PHP 파일의 코드를 읽음
    $code = file_get_contents($filePath);

    // AST 추출
    $ast = $parser->parse($code);

    // 추출한 AST를 JSON 형식으로 변환
    $filename = basename($filePath, '.php') . '_ast.json';
    file_put_contents("$outputDir/$filename", json_encode($ast, JSON_PRETTY_PRINT));

    echo "AST 추출 완료: $outputDir/$filename\n";
} catch (Error $e) {
    // 파싱 중 오류 발생 시 처리
    echo "Parse error: {$e->getMessage()}\n";
}