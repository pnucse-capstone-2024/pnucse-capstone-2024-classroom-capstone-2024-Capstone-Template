""" import subprocess
import os

def extract_opcode(filepath):
    output_dir = os.path.abspath('outputs')
    filename = os.path.basename(filepath).replace('.php', '_opcode.txt')
    opcode_filepath = os.path.join(output_dir, filename)
    
    try:
        # phpdbg를 사용해 Opcode 추출
        cmd = ['phpdbg', '-p', filepath]  # phpdbg 명령에 '-p' 추가
        with open(opcode_filepath, 'w') as f:
            result = subprocess.run(cmd, stdout=f, stderr=subprocess.PIPE, text=True)
        
        if result.returncode != 0:
            return f"Opcode 추출 실패: {result.stderr}", 500
        return f"Opcode 추출 완료: {opcode_filepath}"
    except Exception as e:
        return f"오류 발생: {str(e)}", 500 """
        
import os
import subprocess

def extract_opcode(filepath):
    output_dir = os.path.abspath('outputs')
    
    # outputs 디렉터리가 없으면 생성
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    filename = os.path.basename(filepath).replace('.php', '_opcode.txt')
    opcode_filepath = os.path.join(output_dir, filename)

    # phpdbg 명령어
    cmd = ['phpdbg', '-p', filepath]

    try:
        # subprocess.run()을 사용하여 명령어 실행
        with open(opcode_filepath, 'w') as outfile:
            result = subprocess.run(cmd, stdout=outfile, stderr=subprocess.STDOUT, text=True)
        
        # 명령어가 성공적으로 실행된 경우
        if result.returncode == 0:
            return f"Opcode 추출 완료: {opcode_filepath}", 200  # 성공 메시지와 상태 코드 반환
        else:
            return f"Opcode 추출 실패: {result.stderr}", 500  # 실패 시 오류 메시지 반환
    except Exception as e:
        return f"오류 발생: {str(e)}", 500  # 예외 메시지 반환