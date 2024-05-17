캐릭터 API
방법	API URL	기능	요청(입력할 데이터)
얻다	/characterAPI/character/:캐릭터_ID	케릭터가 도착했습니다	
델	/characterAPI/character/:캐릭터_ID	케릭터 삭제하기	
우편	/characterAPI/문자	케릭터 작성하기	{"이름": "이름"}
우편	/itemAPI/항목	아이템 생성하기	{"item_code": 5,"item_name": "파멸의 반지","item_stat": { "health": 20, "power": 2 }}
얻다	/itemAPI/item/:item_ID	아이템 상세정보 입력받기	
얻다	/itemAPI/항목	아이템 모두 가져오세요	{"이름": "이름"}
반점	/itemAPI/item/:item_ID	아이템 수정하기	{"item_name": "파멸의 반지_리뉴얼","item_stat": { "health": 40 }}
반점	/equipmentAPI/equip/:캐릭터_ID	아이템 장착하기	{"항목_코드": 4}
반점	/equipmentAPI/unequip/:캐릭터_ID	아이템 탈착하기	{"항목_코드": 4}
얻다	/equipmentAPI/equip/:캐릭터_ID	장착한 아이템

.
├── .env
├── .gitignore
├── .prettierrc
├── app.js
├── routes
│   └── characters.router.js
├── schemas
│   ├── index.js
│   └── characters.schema.js
├── package.json
