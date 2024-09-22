import os
import json

# 기본 경로 설정
base_directory = './public/uploads/post'

# JSON 파일로 저장할 데이터
post_data = []

# 카테고리 전체 목록
all_kategorie = set()

# 카테고리 JSON 파일로 저장할 데이터
kategorie_data = [{
    'label': '전체', 'value': '전체'
}]

# post 경로 하위 폴더 순회
for folder_name in os.listdir(base_directory):
    # post 하위에 있는 폴더의 상대경로
    folder_path = os.path.join(base_directory, folder_name)

    # 폴더인지 확인
    if os.path.isdir(folder_path):

        # info.txt 파일을 읽어서 제목과 카테고리를 가져옴
        info_file_path = os.path.join(folder_path, 'info.txt')

        title = folder_name  # 기본 폴더명을 제목으로 사용
        kategorie = []  # 카테고리 목록
        sub_title = ""  # 서브 타이틀 초기화
        date = ""  # 날짜 초기화

        # info.txt 파일이 존재하면 제목과 카테고리를 읽어옴
        if os.path.exists(info_file_path):
            info_data = {}
            with open(info_file_path, 'r', encoding='utf-8') as f:
                # info.txt 파일 내부 한줄씩 읽기
                lines = f.readlines()

                # 각 라인을 ':' 기준으로 구분하여 키:값 형태로 딕셔너리에 저장
                for line in lines:
                    if ':' in line:
                        key, value = line.split(':', 1)  # ':' 기준으로 키와 값 구분, 오른쪽부터 한번만 분할
                        info_data[key.strip()] = value.strip()  # 양쪽 공백 제거 후 저장

            # 각 키에 따라 필요한 데이터 추출
            title = info_data.get('title', title)  # 'title' 키의 값 가져오거나 기본 폴더명 사용
            kategorie = info_data.get('tag', '').split('#')[1:]  # 'tag' 키의 값에서 '#'을 기준으로 분할
            sub_title = info_data.get('subTitle', '')  # 'subTitle' 키의 값 가져오기
            date = info_data.get('date', '')  # '날짜' 키의 값 가져오기

        # 파일 목록 생성
        files = []
        file_id = 1
        thumbnail = None  # 썸네일 초기화

        # 폴더 내부에 들어가있는 파일 목록 기준으로 반복
        for file_name in os.listdir(folder_path):
            # 파일 확장자 확인
            file_ext = os.path.splitext(file_name)[1].lower()

            # 이미지 파일만 처리
            if file_ext in ['.jpg', '.jpeg', '.png', '.webp', '.gif']:
                if 'thumbnail' in file_name.lower():
                    # 썸네일 파일 처리 (썸네일은 'thumbnail'이라는 단어가 포함된 파일명으로 가정)
                    thumbnail = {
                        'id': 1,
                        'imgSrc': f'/uploads/post/{folder_name}/{file_name}'
                    }
                else:
                    # 썸네일이 아닌 이미지 파일 처리
                    files.append({
                        'id': file_id,
                        'type': 'image',
                        'imgSrc': f'/uploads/post/{folder_name}/{file_name}'
                    })
                    file_id += 1

            # 비디오 파일만 처리
            elif file_ext in ['.mp4', '.api']:
                files.append({
                    'id': file_id,
                    'type': 'video',
                    'imgSrc': f'/uploads/post/{folder_name}/{file_name}'
                })
                file_id += 1

            # txt 파일 처리 (유튜브 링크)
            elif file_ext == '.txt' and file_name != 'info.txt':
                txt_file_path = os.path.join(folder_path, file_name)
                with open(txt_file_path, 'r', encoding='utf-8') as txt_file:
                    video_link = txt_file.read().strip()  # txt 파일에서 링크 읽어오기
                    files.append({
                        'id': file_id,
                        'type': 'video_link',
                        'link': video_link  # 비디오 링크 추가
                    })
                    file_id += 1

        # 썸네일이 없는 경우 기본값 설정 (필요할 경우)
        if not thumbnail:
            thumbnail = {
                'id': 1,
                'imgSrc': '/uploads/default/thumbnail.png'  # 기본 썸네일 경로
            }

        # 각 폴더에 해당하는 데이터 추가
        post_data.append({
            'title': title,
            'subTitle': sub_title,
            'date': date,
            'id': folder_name,
            'files': files,
            'thumbnail': thumbnail,
            'kategorie': kategorie
        })

all_kategorie = sorted(all_kategorie)

for kategorie in all_kategorie:
    kategorie_data.append({
        'label': kategorie,
        'value': kategorie
    })

# post_data 결과를 JSON 파일로 저장
output_file = './src/data/postData.json'
os.makedirs(os.path.dirname(output_file), exist_ok=True)  # 디렉터리가 없는 경우 생성
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=4)

print(f"JSON 데이터가 {output_file}에 저장되었습니다.")

# post_data 결과를 JSON 파일로 저장
kategorie_data_output_file = './src/data/tabData.json'
os.makedirs(os.path.dirname(kategorie_data_output_file), exist_ok=True)  # 디렉터리가 없는 경우 생성
with open(kategorie_data_output_file, 'w', encoding='utf-8') as f:
    json.dump(kategorie_data, f, ensure_ascii=False, indent=4)

print(f"JSON 데이터가 {kategorie_data_output_file}에 저장되었습니다.")
