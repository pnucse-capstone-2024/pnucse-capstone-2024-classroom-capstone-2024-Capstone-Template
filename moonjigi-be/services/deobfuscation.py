""" import os
import subprocess


def deobfuscate_php(filepath, php_path="php"):
    absolute_filepath = os.path.abspath(filepath)

    # PHPDeobfuscator 폴더에서 index.php를 실행
    cmd = [php_path, 'index.php', '-f', absolute_filepath]

    try:
        # subprocess.run 호출 시 stderr와 stdout을 캡처
        result = subprocess.run(cmd,  text=True, cwd='./PHPDeobfuscator')

        # stderr 출력이 있을 경우 경고를 출력하되, 비난독화 결과는 stdout에서 가져옴
        if result.stderr:
            print(f"PHP 경고 또는 오류: {result.stderr}") # 경고 및 오류 출력

        # 비난독화 결과가 정상적으로 나왔는지 확인
        if result.returncode != 0:
            return f"비난독화 실패", 500

        return result.stdout  # 비난독화된 코드 반환
    except Exception as e:
        return f"오류 발생: {str(e)}", 500

def save_deobfuscated_code(code, original_filename):
    OUTPUT_FOLDER = 'outputs/'
    os.makedirs(OUTPUT_FOLDER, exist_ok=True)  # 출력 폴더가 없으면 생성
    deobfuscated_filename = os.path.join(OUTPUT_FOLDER, original_filename)
    with open(deobfuscated_filename, 'w') as f:
        f.write(code)
    return deobfuscated_filename """
    
import os
import subprocess


def deobfuscate_php(filepath, php_path="php"):
    absolute_filepath = os.path.abspath(filepath)

    # PHPDeobfuscator 폴더에서 index.php를 실행
    cmd = [php_path,  '-d', 'error_reporting=E_ALL & ~E_DEPRECATED','index.php', '-f', absolute_filepath]

    try:
        # subprocess.run 호출 시 stderr와 stdout을 캡처
        result = subprocess.run(cmd, text=True, cwd='./PHPDeobfuscator', capture_output=True)

        # stderr 출력이 있을 경우 경고를 출력하되, 비난독화 결과는 stdout에서 가져옴
        if result.stderr:
            print(f"PHP 경고 또는 오류: {result.stderr}")  # 경고 및 오류 출력

        # 비난독화 결과가 정상적으로 나왔는지 확인
        if result.returncode != 0:
            return f"비난독화 실패", 500

        return result.stdout  # 비난독화된 코드 반환
    except Exception as e:
        return f"오류 발생: {str(e)}", 500


def save_deobfuscated_code(code, original_filename):
    OUTPUT_FOLDER = 'outputs/'
    os.makedirs(OUTPUT_FOLDER, exist_ok=True)  # 출력 폴더가 없으면 생성
    deobfuscated_filename = os.path.join(OUTPUT_FOLDER, original_filename)

    with open(deobfuscated_filename, 'w') as f:
        f.write(code)

    return deobfuscated_filename